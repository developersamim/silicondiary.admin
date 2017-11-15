import { LoginComponent } from './../../public/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../../public/register/register.component';
 
 
export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent}
];