import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
    selector: 'app-root',
    // imports: [RouterOutlet, RouterLink],
    template: `
        hello Universe {{ city }}
        
        <nav>
            <a routerLink="/">Home</a>
            <a routerLink="/about">About</a>
            <a routerLink="/singup">Sing up</a>
        </nav>
        <router-outlet/>
    `,
    styles: `
        :host {
            display: block;
            color: blue;
        }`,
    imports: [
        RouterOutlet,
        RouterLink
    ],
})
export class App {
    city = 'San Francisco';


}
