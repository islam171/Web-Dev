import {Component, inject, signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AlbumService} from "../../services/album.service";
import {IAlbum} from "../../models/ialbum";
import {Location} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

interface LoginData {
    title: string
}

@Component({
    selector: 'app-album-detail',
    imports: [ReactiveFormsModule, RouterLink],
    templateUrl: './album-detail.html',
    styleUrl: './album-detail.css',
})
export class AlbumDetail {

    album = signal<IAlbum | null>(null);
    private activatedRoute = inject(ActivatedRoute);
    private albumService = inject(AlbumService);


    constructor(private location: Location) {
        this.activatedRoute.params.subscribe(params => {
            this.albumService.getAlbum(params['id']).subscribe(album => {
                this.album.set(album);
            })

        })


    }

    albumForm = new FormGroup({
        title: new FormControl(''),
    })

    submitHandler(){
        let album: IAlbum = {
            id: this.album()?.id || '',
            title: this.albumForm.value.title || '',
            userId: this.album()?.userId || ''
        }
        this.albumService.updateAlbum(album).subscribe((album: IAlbum) =>{
            this.album.set(album)
        })
    }


}
