import {AfterViewInit, Component, computed, ElementRef, inject, OnInit, signal, ViewChild} from '@angular/core';
import {AlbumService} from "../../services/album.service";
import {AlbumList} from "../../components/album-list/album-list";
import {IAlbum} from "../../models/ialbum";
import {debounceTime, distinctUntilChanged, fromEvent, map} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-albums',
    imports: [
        AlbumList
    ],
    templateUrl: './albums.html',
    styleUrl: './albums.css',
})
export class Albums implements OnInit, AfterViewInit {
    albumService = inject(AlbumService);
    router = inject(Router);
    route = inject(ActivatedRoute);

    albumList = signal<IAlbum[]>([])
    query = signal<string>('')
    filtredAlbumList = computed<IAlbum[]>(() => {
        return this.albumList().filter(item => item.title.toLowerCase().includes(this.query().toLowerCase()) );
    })

    @ViewChild("search", {static: true}) search!: ElementRef;


    ngOnInit() {
        this.albumService.ensureAlbumsLoaded();
        this.albumService.albums$.subscribe(albums => {
            this.albumList.set(albums ?? []);
        })

    }

    onDelete(id: string) {
        this.albumService.deleteAlbum(id).subscribe(
            (albums: IAlbum[]) => {
                this.albumList.set(albums)
            }
        )
    }

    constructor() {
        this.route.queryParams.subscribe(params => {
            const searchParams = params['search'] || '';
            this.query.set(searchParams);
        })
    }

    ngAfterViewInit() {
        fromEvent<InputEvent>(this.search.nativeElement, 'input').pipe(
            map(() => this.search.nativeElement.value),
            debounceTime(1000),
            distinctUntilChanged()
        ).subscribe((value: string)=> {
            this.router.navigate([], {
                queryParams: {search: value}
            });
        })
    }


}
