import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchRoutingModule} from './search-routing.module';
import {SearchComponent} from './search.component';
import {SearchService} from '../../shared/service/search/search.service';
import {CardModule} from '../../shared/component/card/card.module';


@NgModule({
    declarations: [SearchComponent],
    imports: [
        CommonModule,
        SearchRoutingModule,
        CardModule
    ],
    providers: [SearchService]
})
export class SearchModule { }
