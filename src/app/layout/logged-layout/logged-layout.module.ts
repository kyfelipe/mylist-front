import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoggedLayoutRoutingModule} from './logged-layout-routing.module';
import {LoggedLayoutComponent} from './logged-layout.component';
import {NbButtonModule, NbLayoutModule, NbSearchModule, NbSidebarModule} from '@nebular/theme';
import {LoaderModule} from '../../shared/component/loader/loader.module';


@NgModule({
    declarations: [LoggedLayoutComponent],
    imports: [
        CommonModule,
        LoggedLayoutRoutingModule,
        NbLayoutModule,
        NbButtonModule,
        NbSidebarModule.forRoot(),
        NbSearchModule,
        LoaderModule,
    ]
})
export class LoggedLayoutModule { }
