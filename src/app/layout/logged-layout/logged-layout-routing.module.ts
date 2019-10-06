import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoggedLayoutComponent} from './logged-layout.component';


const routes: Routes = [
    {
        path: '',
        component: LoggedLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./../../page/home/home.module').then(m => m.HomeModule) },
            { path: 'busca', loadChildren: () => import('./../../page/search/search.module').then(m => m.SearchModule) },
            { path: 'media/:id', loadChildren: () => import('./../../page/media/media.module').then(m => m.MediaModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoggedLayoutRoutingModule { }
