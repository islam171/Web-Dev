import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import {Home} from "./pages/home/home";


@Component({
    selector: 'app-root',
    template: `

        <main>
            <a [routerLink]="['/']">
                <header class="brand-name">
                    <img class="brand-logo" src="/public/logo.svg" alt="logo" aria-hidden="true" />
                </header>
            </a>
            <section class="content">
                <router-outlet />
            </section>
        </main>
    `,
    imports: [RouterOutlet, RouterLink],
    styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-app');
}
