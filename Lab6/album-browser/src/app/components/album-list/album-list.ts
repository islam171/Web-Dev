import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IAlbum} from "../../models/ialbum";
import {AlbumItem} from "../album-item/album-item";

@Component({
  selector: 'app-album-list',
    imports: [
        AlbumItem
    ],
  templateUrl: './album-list.html',
  styleUrl: './album-list.css',
})
export class AlbumList {
    @Input() albumList: IAlbum[] = [];
    @Output() onDeleteId = new EventEmitter<string>();

    onDelete(id: string){
        this.onDeleteId.emit(id);
    }
}
