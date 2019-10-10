import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Multimedia} from '../../model/multimedia/multimedia';
import {environment} from '../../../../environments/environment';

@Injectable()
export class MultimediaService {
    private url: string = environment.url;

    constructor(private http: HttpClient) { }

    findById(id: string): Observable<Multimedia> {
        return this.http.get<Multimedia>(this.url + '/multimedia/' + id);
    }
}
