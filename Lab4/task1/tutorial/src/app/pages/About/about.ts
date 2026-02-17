import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {Pipe} from '../../components/pipe/pipe'

@Component({
    template: `
        <section>
            <h1>About</h1>
            <a routerLink="/">Home</a>
            <a routerLink="/about">About</a>
        </section>
        <section>
            <app-pipe/>
        </section>
    `,
    imports: [RouterLink, Pipe]
})

export class About {}