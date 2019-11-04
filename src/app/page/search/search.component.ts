import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

import {SearchService} from '../../shared/service/search/search.service';
import {Movie} from '../../shared/model/movie/movie.model';
import {Page} from '../../shared/model/page/page.model';

@Component({
    selector: 'ml-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    public movies: Page<Movie>;

    constructor(
        private route: ActivatedRoute,
        private searchService: SearchService,
        private title: Title
    ) { }

    ngOnInit() {
        this.title.setTitle('MyList | Busca');
        this.route.queryParams.subscribe(
            (param) => {
                this.searchService.search(param.q).subscribe((movies) => this.movies = movies);
            }
        );
    }
}
