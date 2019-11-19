import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: () => import('./layout/logged-layout/logged-layout.module').then(m => m.LoggedLayoutModule) },
    { path: 'auth', loadChildren: () => import('./layout/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
