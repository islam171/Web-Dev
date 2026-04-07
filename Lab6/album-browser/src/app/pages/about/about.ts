import {Component, inject, signal} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../services/autservice";

@Component({
    selector: 'app-about',
    imports: [
        RouterLink,
        FormsModule
    ],
    templateUrl: './about.html',
    styleUrl: './about.css',
})


export class About {

    username = ''
    password = ''

    authService = inject(AuthService);

    clickBtn() {
        this.authService.login(this.username, this.password).subscribe({
            next: (data) => {
                console.log(data);
            }
        })
    }


}
