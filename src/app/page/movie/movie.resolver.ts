import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MovieService} from '../../shared/service/multimedia/movie.service';
import {Movie} from '../../shared/model/movie/movie.model';

@Injectable()
export class MovieResolver implements Resolve<Observable<Movie>> {
    constructor(private multimediaService: MovieService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> {
        return this.multimediaService.findById(route.params.id);
    }
}
