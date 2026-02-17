import {Component, inject} from "@angular/core";
import {RouterLink} from "@angular/router";
import {Counter} from "../../components/Counter";
import {Defer} from "../../components/defer";
import {Editable} from "../../components/editable";
import {Event} from "../../components/event";
import {Server} from "../../components/running";
import {User} from "../../components/User/user";
import {UserList} from "../../components/userList";
import {CarService} from "../../components/carService/car.service";
import {StarPipe} from "../../pipes/StarPipe/starPipe";

@Component({
    template: `
        <section>
            <h1>Home</h1>
            
            <section>
                <app-user username = "islam"/>
            </section>
            <section>
                <app-server/>
            </section>
            <section>
                <app-user-list/>
            </section>
            <section>
                <app-editable/>
            </section>
            <section>
                <app-event/>
            </section>
            <section>
                Counter: {{count}}
                <app-counter (addCountEvent)="addCount($event)" />
            </section>
            <section>
                <app-defer/>
            </section>
            <section>
                Car list: {{carList}}
            </section>
            <section>
                The best University in the world: {{'KBTU' | star}}
            </section>
        </section>
    `,
    imports: [RouterLink, Counter, Defer, Editable, Event, Server, User, UserList, StarPipe],
})

export class Home {
    count = 0;
    addCount(num: number) {
        this.count += num;
    }
    carService = inject(CarService);
    carList = this.carService.getCars().join(' * ')
}