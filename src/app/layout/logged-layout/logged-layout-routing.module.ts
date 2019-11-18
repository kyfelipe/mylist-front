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
            { path: 'login', loadChildren: () => import('../../page/login/login.module').then(m => m.LoginModule) },
            { path: 'cadastro', loadChildren: () => import('../../page/register/register.module').then(m => m.RegisterModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoggedLayoutRoutingModule { }
