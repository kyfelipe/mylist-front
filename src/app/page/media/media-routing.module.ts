import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MediaComponent} from './media.component';
import {MediaResolver} from './media.resolver';


const routes: Routes = [
    {
        path: '',
        component: MediaComponent,
        resolve: {
            multimedia: MediaResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MediaRoutingModule { }
