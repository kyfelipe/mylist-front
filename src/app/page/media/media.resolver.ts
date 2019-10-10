import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Multimedia} from '../../shared/model/multimedia/multimedia';
import {MultimediaService} from '../../shared/service/multimedia/multimedia.service';

@Injectable()
export class MediaResolver implements Resolve<Observable<Multimedia>> {
    constructor(private multimediaService: MultimediaService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Multimedia> {
        return this.multimediaService.findById(route.params.id);
    }
}
