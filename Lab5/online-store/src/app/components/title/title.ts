import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.css',
})
export class Title implements OnInit {
    @Input() title: string = "";
    @Input() size: number = 16;

    ngOnInit() {
        if(this.title.length > 80){
           this.title = this.title.slice(0, 80) + "..."
        }
    }

}
