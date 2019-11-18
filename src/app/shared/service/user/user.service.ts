import {Injectable} from '@angular/core';
import {UserRegister} from '../../model/user-register/user-register.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService {
    private url: string = environment.url;

    constructor(private http: HttpClient) { }

    public register(userRegister: UserRegister) {
        return this.http.post(this.url + '/api/auth', userRegister);
    }

    public login(username: string, password: string) {
        return this.http.post(this.url + '/login', {username, password}, {observe: 'response', responseType: 'text'});
    }
}
