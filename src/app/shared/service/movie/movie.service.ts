import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../../environments/environment';
import {Movie} from '../../model/movie/movie.model';
import {Page} from '../../model/page/page.model';

@Injectable()
export class MovieService {
    private url: string = environment.url;

    constructor(private http: HttpClient) { }

    findById(id: string): Observable<Movie> {
        return this.http.get<Movie>(this.url + '/movie/' + id);
    }

    discover() {
        return this.http.get<Page<Movie>>(this.url + '/movie/discover');
    }
}
