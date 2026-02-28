import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {IAlbum} from "../models/ialbum";
import {IPhoto} from "../models/iphoto";

@Injectable({
    providedIn: 'root',
})
export class AlbumService {
    baseURL = "https://jsonplaceholder.typicode.com/albums/"

    constructor(private http: HttpClient) {
    }

    getAlbums(): Observable<IAlbum[]> {
        return this.http.get<IAlbum[]>(`${this.baseURL}`)
    }

    getAlbum(id: string): Observable<IAlbum> {
        return this.http.get<IAlbum>(`${this.baseURL}/${id}`)
    }

    getAlbumPhotos(id: string): Observable<IPhoto[]> {
        return this.http.get<IPhoto[]>(`${this.baseURL}/${id}/photos`)
    }

    updateAlbum(album: IAlbum): Observable<IAlbum> {
        this.http.put(`${this.baseURL}/${album.id}`, album)
        let updatedAlbum: IAlbum = album;
        return of(album);
    }

    deleteAlbum(id: string): Observable<IAlbum[]> {
        this.http.delete(`${this.baseURL}/${id}`)

        return this.http.get<IAlbum[]>(`${this.baseURL}`).pipe(
            map((res: IAlbum[]) => res.filter((album: IAlbum) => album.id !== id))
        )
    }
}