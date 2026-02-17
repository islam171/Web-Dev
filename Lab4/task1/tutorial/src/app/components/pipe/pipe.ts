import {Component} from "@angular/core";
import {LowerCasePipe} from "@angular/common";

@Component({
    selector: "app-pipe",
    template: `
        {{username | lowercase}}
    `,
    imports: [LowerCasePipe]
})

export class Pipe {
    username = 'ISLAM'
}