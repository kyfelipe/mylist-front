import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NbThemeModule} from '@nebular/theme';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoaderInterceptor} from './shared/interceptor/loader.interceptor';
import {LoaderModule} from './shared/component/loader/loader.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NbThemeModule.forRoot({name: 'dark'}),
        LoaderModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
