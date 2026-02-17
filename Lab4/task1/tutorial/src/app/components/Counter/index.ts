import {Component, output} from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <button (click)="addCount()">increment</button>
    `
})

export class Counter {
    readonly addCountEvent = output<number>();
    addCount() {
        this.addCountEvent.emit(1)
    }
}