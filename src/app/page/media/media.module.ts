import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MediaRoutingModule} from './media-routing.module';
import {MediaComponent} from './media.component';
import {MultimediaService} from '../../shared/service/multimedia/multimedia.service';
import {MediaResolver} from './media.resolver';


@NgModule({
    declarations: [MediaComponent],
    imports: [
        CommonModule,
        MediaRoutingModule
    ],
    providers: [
        MultimediaService,
        MediaResolver
    ]
})
export class MediaModule { }
