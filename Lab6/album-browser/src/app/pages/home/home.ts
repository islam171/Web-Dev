import {Component, inject} from '@angular/core';
import {AlbumService} from "../../services/album.service";

@Component({
  selector: 'app-home',
    imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

    albumService = inject(AlbumService);


}
