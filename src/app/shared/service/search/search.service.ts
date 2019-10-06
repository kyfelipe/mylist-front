import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../../environments/environment';
import {MultimediaSearch} from '../../model/multimedia/multimedia-search.model';

@Injectable()
export class SearchService {
    private url: string = environment.url;

    constructor(private http: HttpClient) { }

    public search(query: string): Observable<MultimediaSearch[]> {
        return this.http.get<MultimediaSearch[]>(this.url + '/multimedia/search', { params: { q: query } } );
    }
}
