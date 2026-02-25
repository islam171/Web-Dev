import {Component, output} from '@angular/core';
import {Search} from "../search/search";
import {Icon} from "../icon/icon";

@Component({
  selector: 'app-header',
    imports: [
        Search,
        Icon
    ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    outputQuery = output<string>();

    search(query: string){
        this.outputQuery.emit(query);
    }
}
