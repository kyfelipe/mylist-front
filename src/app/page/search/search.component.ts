import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {SearchService} from '../../shared/service/search/search.service';
import {MultimediaSearch} from '../../shared/model/multimedia/multimedia-search.model';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'ml-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    public $multimedia: Observable<MultimediaSearch[]>;

    constructor(
        private route: ActivatedRoute,
        private searchService: SearchService,
        private title: Title
    ) { }

    ngOnInit() {
        this.title.setTitle('MyList | Busca');
        this.route.queryParams.subscribe(
            (param) => this.$multimedia = this.searchService.search(param.q)
        );
    }
}
