import {Component} from "@angular/core";
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    template: `
        <form [formGroup]="form" (ngSubmit)="handleSubmit()">
            <label for="username">
                Username:
                <input id="username" type="text" formControlName="username">
            </label>
            <label for="email">
                Email:
                <input id="email" type="email" formControlName="email">
            </label>
            <label for="password">
                Password:
                <input id="password" type="password" formControlName="password">
            </label>
            <button [disabled]="!form.valid" type="submit">Submit</button>
        </form>
    `,
    imports: [ReactiveFormsModule]
})

export class SignUpPage {
    form = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        email: new FormControl('', [Validators.required, Validators.email]),
    })

    handleSubmit(): void {
        alert(this.form.value.username + " | " + this.form.value.password + " | " + this.form.value.email);
    }
}