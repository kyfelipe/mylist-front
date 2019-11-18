import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {NbButtonModule, NbCardModule, NbInputModule} from '@nebular/theme';
import {UserService} from '../../shared/service/user/user.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        NbCardModule,
        NbInputModule,
        NbButtonModule,
        ReactiveFormsModule,
    ],
    providers: [UserService]
})
export class LoginModule { }
