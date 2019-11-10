import {NgModule} from '@angular/core';
import {LoaderComponent} from './loader.component';
import {CommonModule} from '@angular/common';
import {NbProgressBarModule} from '@nebular/theme';

@NgModule({
    declarations: [LoaderComponent],
    imports: [
        CommonModule,
        NbProgressBarModule
    ],
    exports: [LoaderComponent]
})
export class LoaderModule { }
