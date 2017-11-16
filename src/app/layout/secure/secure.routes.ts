import { DashboardComponent } from './../../secure/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './shared/header/header.component';
import { CategoryComponent } from '../../secure/category/category.component';

export const SECURE_ROUTES: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {path: 'category', component: CategoryComponent}
];