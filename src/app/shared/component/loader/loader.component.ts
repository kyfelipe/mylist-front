import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoaderService} from '../../service/loader/loader.service';
import {LoaderState} from '../../model/loader-state/loader-state.model';

@Component({
    selector: 'ml-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

    public show = false;

    private subscription: Subscription;

    constructor(private loaderService: LoaderService) { }

    ngOnInit() {
        this.subscription = this.loaderService.loaderState.subscribe((state: LoaderState) => this.show = state.show);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
