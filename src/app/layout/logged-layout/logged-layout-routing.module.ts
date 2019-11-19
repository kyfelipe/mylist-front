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
            { path: 'movie/:id', loadChildren: () => import('../../page/movie/movie.module').then(m => m.MovieModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoggedLayoutRoutingModule { }
