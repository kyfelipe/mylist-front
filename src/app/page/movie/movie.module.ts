import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovieRoutingModule} from './movie-routing.module';
import {MovieComponent} from './movie.component';
import {MovieService} from '../../shared/service/movie/movie.service';
import {MovieResolver} from './movie.resolver';
import {NbCardModule} from '@nebular/theme';


@NgModule({
    declarations: [MovieComponent],
    imports: [
        CommonModule,
        MovieRoutingModule,
        NbCardModule
    ],
    providers: [
        MovieService,
        MovieResolver
    ]
})
export class MovieModule { }
