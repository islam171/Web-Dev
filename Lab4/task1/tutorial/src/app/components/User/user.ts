import {Component, input} from '@angular/core'

@Component({
    selector: 'app-user',
    template: `Username: {{username()}}`,
})

export class User{
    username = input<string>()
}