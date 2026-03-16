import {Component, Input} from '@angular/core';
import {IPhoto} from "../../models/iphoto";

@Component({
  selector: 'app-photo-item',
    imports: [],
  templateUrl: './photo-item.html',
  styleUrl: './photo-item.css',
})
export class PhotoItem {
    @Input() photo!: IPhoto;
    fixed = this.photo?.thumbnailUrl.replace('https://via.placeholder.com', 'https://placehold.co')
}
