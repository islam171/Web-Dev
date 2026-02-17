import {Component} from '@angular/core';

@Component({
    selector: 'app-editable',
    template: ` <div [contentEditable]="isEditable"></div> `,
})
export class Editable {
    isEditable = true;
}
