import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

import {Movie} from '../../shared/model/movie/movie.model';
import {Page} from '../../shared/model/page/page.model';

@Component({
    selector: 'ml-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public movies: Page<Movie>;

    constructor(private title: Title, private route: ActivatedRoute) { }

    ngOnInit() {
        this.movies = this.route.snapshot.data.movies;
        console.log(this.route.snapshot.data.movies);
        this.title.setTitle('MyList');
    }

    getImage(movie: Movie) {
        return 'url(https://image.tmdb.org/t/p/w500' + movie.backdrop_path + ') no-repeat bottom';
    }
}
