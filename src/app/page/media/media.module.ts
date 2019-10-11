import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MediaRoutingModule} from './media-routing.module';
import {MediaComponent} from './media.component';
import {MultimediaService} from '../../shared/service/multimedia/multimedia.service';
import {MediaResolver} from './media.resolver';
import {NbCardModule} from '@nebular/theme';


@NgModule({
    declarations: [MediaComponent],
    imports: [
        CommonModule,
        MediaRoutingModule,
        NbCardModule
    ],
    providers: [
        MultimediaService,
        MediaResolver
    ]
})
export class MediaModule { }
