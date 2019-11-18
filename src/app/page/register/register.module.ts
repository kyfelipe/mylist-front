import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegisterRoutingModule} from './register-routing.module';
import {NbButtonModule, NbCardModule, NbInputModule} from '@nebular/theme';
import {RegisterComponent} from './register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../../shared/service/user/user.service';

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        NbCardModule,
        NbInputModule,
        NbButtonModule,
        ReactiveFormsModule
    ],
    providers: [
        UserService
    ]
})
export class RegisterModule { }
