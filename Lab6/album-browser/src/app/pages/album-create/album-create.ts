import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AlbumService} from "../../services/album.service";
import {Router} from "@angular/router";
import {IAlbumCreate} from "../../models/ialbum";

@Component({
  selector: 'app-album-create',
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './album-create.html',
  styleUrl: './album-create.css',
})
export class AlbumCreate {
    // createAlbumModel  = signal({
    //     title: "",
    //     userId: 0
    // })
    //
    // createFrom = form(this.createAlbumModel, (schemaPath) => {
    //     min(schemaPath.title, 3, {message: "Title must be at least 3 characters"})
    //     min(schemaPath.userId, 2, {message: "UserId must be 2-10 characters"})
    //     max(schemaPath.userId, 10, {message: "UserId must be 1-10 characters"})
    // })
    //
    // createAlbum(){
    //     console.log(this.createFrom.userId);
    // }

    albumService = inject(AlbumService)
    createForm = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(3)]),
        userId: new FormControl(0, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
    })

    router = inject(Router);

    submit(){
        let album: IAlbumCreate = {
            title: this.createForm.value.title || '',
            userId: this.createForm.value.userId || 0
        }
        this.albumService.createAlbum(album)
        // this.router.navigate(['/albums'])
    }
}
