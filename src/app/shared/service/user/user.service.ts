import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {UserRegister} from '../../model/user-register/user-register.model';

@Injectable()
export class UserService {
    private url: string = environment.url;

    constructor(private http: HttpClient, private router: Router) { }

    public register(userRegister: UserRegister) {
        return this.http.post(this.url + '/api/auth', userRegister);
    }

    public login(username: string, password: string) {
        return this.http
            .post(this.url + '/login', {username, password}, {observe: 'response', responseType: 'text'})
            .subscribe((response) => {
                this.saveToken(response.body);
                this.router.navigate(['/home']);
            }, error => console.log(error));
    }

    public isLogged(): boolean {
        return !!localStorage.getItem('token');
    }

    public logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/home']);
    }

    private saveToken(token: string) {
        localStorage.setItem('token', token);
    }
}
