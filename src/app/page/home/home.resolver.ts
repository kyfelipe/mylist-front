import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {MovieService} from '../../shared/service/movie/movie.service';
import {Movie} from '../../shared/model/movie/movie.model';
import {Page} from '../../shared/model/page/page.model';

@Injectable()
export class HomeResolver implements Resolve<Observable<Page<Movie>>> {
    constructor(private movieService: MovieService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Page<Movie>> {
        return this.movieService.discover();
    }
}
