import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-back-button',
  imports: [],
  templateUrl: './back-button.html',
  styleUrl: './back-button.css',
})
export class BackButton {

    constructor(private location: Location) {}

    back(){
        this.location.back()
    }
}
