import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {UserService} from '../../shared/service/user/user.service';

@Component({
    selector: 'ml-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    providers: [UserService]
})
export class RegisterComponent implements OnInit {
    public registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.buildRegisterForm();
    }

    public register() {
        this.userService.register({
            email: this.registerForm.get('email').value,
            password: this.registerForm.get('password').value,
            username: this.registerForm.get('username').value
        }).subscribe(() => this.router.navigate(['/auth/login']), error => console.log(error));
    }

    public hasError(field: string, error: string): boolean {
        return this.registerForm.get(field).getError(error) && this.registerForm.get(field).touched;
    }

    private buildRegisterForm() {
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.email, Validators.required]],
            username: ['', [Validators.required, Validators.minLength(4)]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }
}
