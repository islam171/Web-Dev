import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IAlbum} from "../../models/ialbum";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-album-item',
    imports: [
        RouterLink
    ],
  templateUrl: './album-item.html',
  styleUrl: './album-item.css',
})
export class AlbumItem {
    @Input() album!: IAlbum;
    @Output() onDeleteId = new EventEmitter<string>();


    onDelete(id: string){
        this.onDeleteId.emit(id);
    }
}
