import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthLayoutRoutingModule} from './auth-layout-routing.module';
import {NbButtonModule, NbLayoutModule, NbSidebarModule} from '@nebular/theme';
import {AuthLayoutComponent} from './auth-layout.component';

@NgModule({
    declarations: [AuthLayoutComponent],
    imports: [
        CommonModule,
        AuthLayoutRoutingModule,
        NbLayoutModule,
        NbButtonModule,
        NbSidebarModule.forRoot(),
    ],
})
export class AuthLayoutModule { }
