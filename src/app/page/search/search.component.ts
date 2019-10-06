import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {SearchService} from '../../shared/service/search/search.service';
import {MultimediaSearch} from '../../shared/model/multimedia/multimedia-search.model';

@Component({
    selector: 'ml-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    public $multimedia: Observable<MultimediaSearch[]>;

    constructor(
        private route: ActivatedRoute,
        private searchService: SearchService
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(
            (param) => this.$multimedia = this.searchService.search(param.q)
        );
    }
}
