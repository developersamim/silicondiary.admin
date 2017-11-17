import {Injectable} from '@angular/core';
import {Category} from './category';
import {HttpClient} from '@angular/common/http';
import { error } from 'selenium-webdriver';
import { environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Jsonp, URLSearchParams } from '@angular/http'; 
import 'rxjs/Rx';
const API_URL = environment.API_URL;

@Injectable()
export class CategoryService{

    constructor(private http: HttpClient){
        
        
    }
    findAll(): Observable<any>{
        const endPoint = 'category'
        let result = this.http.get(API_URL + endPoint)
        .map((response: Response) => response);
        return result;
    }
}