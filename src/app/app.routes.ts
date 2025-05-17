import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DefaultMainLayoutComponent } from './components/default-main-layout/default-main-layout.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "main",
        component: DefaultMainLayoutComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    { 
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full' 
    }
];
