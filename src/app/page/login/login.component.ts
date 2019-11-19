import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/service/user/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'ml-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [UserService]
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, public userService: UserService) { }

    ngOnInit() {
        this.buildLoginForm();
    }

    public login() {
        return this.userService.login(this.loginForm.get('username').value, this.loginForm.get('password').value);
    }

    public hasError(field: string, error: string): boolean {
        return this.loginForm.get(field).getError(error) && this.loginForm.get(field).touched;
    }

    private buildLoginForm() {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }
}
