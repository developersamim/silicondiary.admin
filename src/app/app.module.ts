import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

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
import{CategoryComponent} from './secure/category/category.component';
import{CategoryService} from './secure/category/category.service';
import{CategoryUpdateComponent} from './secure/category/categoryupdate.component';
import{CategoryAddComponent} from './secure/category/category-add.component';
import{MessageService} from './messages/message.service';
import{MessagesComponent} from './messages/message.component';

//Import module from ng-boostrap
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
/**
 * Route constant 
 */
const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
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
    CategoryComponent,
    CategoryUpdateComponent,
    CategoryAddComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    FormsModule
    //NgbModule.forRoot()
  ],
  providers: [CategoryService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
