import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Movie} from '../../shared/model/movie/movie.model';

@Component({
    selector: 'ml-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    public movie: Movie;

    constructor(private route: ActivatedRoute, private title: Title) { }

    ngOnInit() {
        this.movie = this.route.snapshot.data.movie;
        console.log(this.movie);
        this.title.setTitle('MyList | ' + this.movie.title);
    }

}
