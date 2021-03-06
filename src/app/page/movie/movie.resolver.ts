import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {MovieService} from '../../shared/service/movie/movie.service';
import {Movie} from '../../shared/model/movie/movie.model';

@Injectable()
export class MovieResolver implements Resolve<Observable<Movie>> {
    constructor(private movieService: MovieService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> {
        return this.movieService.findById(route.params.id);
    }
}
