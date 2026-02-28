import {Component, Input} from '@angular/core';
import {IPhoto} from "../../models/iphoto";
import {PhotoItem} from "../photo-item/photo-item";
import {RouterLink} from "@angular/router";
import {IAlbum} from "../../models/ialbum";

@Component({
  selector: 'app-photo-list',
    imports: [
        PhotoItem,
        RouterLink
    ],
  templateUrl: './photo-list.html',
  styleUrl: './photo-list.css',
})
export class PhotoList {
    @Input() photos: IPhoto[] = [];
    @Input() album: IAlbum | null = null;
}
