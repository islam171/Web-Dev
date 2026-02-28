import {Component, inject, OnInit, signal} from '@angular/core';
import {AlbumService} from "../../services/album.service";
import {ActivatedRoute} from "@angular/router";
import {IPhoto} from "../../models/iphoto";
import {PhotoList} from "../../components/photo-list/photo-list";
import {IAlbum} from "../../models/ialbum";

@Component({
  selector: 'app-album-photos',
    imports: [
        PhotoList
    ],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos implements OnInit {

    photoList = signal<IPhoto[]>([])
    album = signal<IAlbum | null>(null);
    private activatedRoute = inject(ActivatedRoute);

    constructor(private albumService: AlbumService) {
        this.activatedRoute.params.subscribe(params => {

            this.albumService.getAlbumPhotos(params['id']).subscribe((album: IPhoto[]) => {
                this.photoList.set(album)
            })
            this.albumService.getAlbum(params['id']).subscribe((album: IAlbum) =>{
                this.album.set(album)
            })

        })
    }



    ngOnInit() {

    }
}
