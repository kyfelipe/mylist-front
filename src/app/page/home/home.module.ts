import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MovieService} from '../../shared/service/movie/movie.service';
import {HomeResolver} from './home.resolver';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    providers: [
        MovieService,
        HomeResolver
    ]
})
export class HomeModule { }
