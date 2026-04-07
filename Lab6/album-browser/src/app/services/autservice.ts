import {Inject, inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    client = inject(HttpClient);

    login(username: string, password: string) : Observable<IAuth> {
        return this.client.post<IAuth>('http://127.0.0.1:8000/api/token/', {'username': username, 'password': password});
    }
}
