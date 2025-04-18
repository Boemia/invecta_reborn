import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DefaultMainLayoutComponent } from './components/default-main-layout/default-main-layout.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "main",
        component: DefaultMainLayoutComponent
    }
];
6