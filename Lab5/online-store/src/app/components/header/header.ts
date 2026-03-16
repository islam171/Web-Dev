import {Component} from '@angular/core';
import {Icon} from "../icon/icon";

@Component({
  selector: 'app-header',
    imports: [
        Icon
    ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    // outputQuery = output<string>();

    // search(query: string){
    //     this.outputQuery.emit(query);
    // }
}
