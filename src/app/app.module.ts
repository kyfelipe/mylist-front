import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NbThemeModule} from '@nebular/theme';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NbThemeModule.forRoot({ name: 'dark' }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
