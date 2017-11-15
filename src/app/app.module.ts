import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PUBLIC_ROUTES } from './layout/public/public.routes';
import { PublicComponent } from './layout/public/public.component';
import { LoginComponent } from './public/login/login.component';
import {RegisterComponent} from './public/register/register.component';
import {DashboardComponent} from './secure/dashboard/dashboard.component';
import { SecureComponent } from './layout/secure/secure.component';
import { SECURE_ROUTES } from './layout/secure/secure.routes';
import{HeaderComponent} from './secure/shared/header/header.component';
import{FooterComponent} from './secure/shared/footer/footer.component';
import{SidebarComponent} from './secure/shared/sidebar/sidebar.component';
import{CategoryListComponent} from './secure/category/category-list.component';

/**
 * Route constant 
 */
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  {path: '', component: SecureComponent, data: {title: 'Secure Views'}, children: SECURE_ROUTES},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PublicComponent, 
    SecureComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
