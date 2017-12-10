import { DashboardComponent } from './../../secure/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './shared/header/header.component';
import { CategoryComponent } from '../../secure/category/category.component';
import{CategoryUpdateComponent} from '../../secure/category/categoryupdate.component';
import { CategoryAddComponent } from '../../secure/category/category-add.component';

export const SECURE_ROUTES: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {path: 'category', component: CategoryComponent},
    {path: 'category-add', component: CategoryAddComponent},
    {path: 'categoryupdate/:id', component: CategoryUpdateComponent}
];