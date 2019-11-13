import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {NbButtonModule, NbCardModule, NbInputModule} from '@nebular/theme';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        NbCardModule,
        NbInputModule,
        NbButtonModule,
    ]
})
export class LoginModule { }
