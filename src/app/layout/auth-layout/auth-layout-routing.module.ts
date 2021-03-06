import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from './auth-layout.component';


const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            { path: 'login', loadChildren: () => import('../../page/login/login.module').then(m => m.LoginModule) },
            { path: 'cadastro', loadChildren: () => import('../../page/register/register.module').then(m => m.RegisterModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthLayoutRoutingModule { }
