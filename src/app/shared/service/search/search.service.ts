import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../../environments/environment';
import {Page} from '../../model/page/page.model';
import {Movie} from '../../model/movie/movie.model';

@Injectable()
export class SearchService {
    private url: string = environment.url;

    constructor(private http: HttpClient) { }

    public search(query: string): Observable<Page<Movie>> {
        return this.http.get<Page<Movie>>(this.url + '/movie/search', { params: { q: query } } );
    }
}
