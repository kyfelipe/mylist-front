import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {LoaderService} from '../service/loader/loader.service';

@Injectable({
    providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private loaderService: LoaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            reportProgress: true,
        });

        this.showLoader();

        return next.handle(req).pipe(finalize(() => this.hideLoader()));
    }

    private showLoader(): void {
        this.loaderService.show();
    }
    private hideLoader(): void {
        this.loaderService.hide();
    }
}
