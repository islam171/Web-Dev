import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, of, tap} from "rxjs";
import {IAlbum, IAlbumCreate} from "../models/ialbum";
import {IPhoto} from "../models/iphoto";

@Injectable({
    providedIn: 'root',
})
export class AlbumService {
    baseURL = "https://jsonplaceholder.typicode.com/"
    private albumsSubject = new BehaviorSubject<IAlbum[]|null>(null);
    albums$ = this.albumsSubject.asObservable();

    constructor(private http: HttpClient) {
    }
    ensureAlbumsLoaded(): void {
        if (this.albumsSubject.value === null) {
            this.getAlbums().subscribe({
                error: (err) => console.error('Failed to load albums', err)
            });
        }
    }

    getAlbums(): Observable<IAlbum[]> {
        return this.http.get<IAlbum[]>(`${this.baseURL}/albums`).pipe(
            tap(albums => this.albumsSubject.next(albums))
        )
    }

    getAlbum(id: string): Observable<IAlbum> {
        return this.http.get<IAlbum>(`${this.baseURL}/albums/${id}`)
    }

    getAlbumPhotos(id: string): Observable<IPhoto[]> {
        return this.http.get<IPhoto[]>(`${this.baseURL}/photos/`, {
            params: {albumId: id}
        })

    }

    updateAlbum(album: IAlbum): Observable<IAlbum> {
        this.http.put(`${this.baseURL}/${album.id}`, album)
        let updatedAlbum: IAlbum = album;
        return of(album);
    }

    createAlbum(album: IAlbumCreate): Observable<IAlbum> {
        return this.http.post<IAlbum>(`${this.baseURL}/albums`, album)
        this.http.get<IAlbum[]>(`${this.baseURL}/albums`).pipe(
            tap((createdAlbum) => {
                console.log(createdAlbum);
                // const current = this.albumsSubject.value ?? [];
                // this.albumsSubject.next([createdAlbum, ...current]);
            })
        )

    }

    deleteAlbum(id: string): Observable<IAlbum[]> {
        this.http.delete(`${this.baseURL}/${id}`)

        return this.http.get<IAlbum[]>(`${this.baseURL}`).pipe(
            map((res: IAlbum[]) => res.filter((album: IAlbum) => album.id !== id))
        )
    }
}