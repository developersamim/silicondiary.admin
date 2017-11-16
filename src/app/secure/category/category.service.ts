import {Injectable} from '@angular/core';
import {Category} from './category';
import {HttpClient} from '@angular/common/http';
import { error } from 'selenium-webdriver';
import { environment} from '../../../environments/environment';


const API_URL = environment.API_URL;

@Injectable()
export class CategoryService{

    constructor(private http: HttpClient){
        
        console.log('API_URL: '+ API_URL);
        const endPoint = 'category'
        this.http.get(API_URL + endPoint).subscribe
        (data => {
            console.log(data);
        },
        error => {
            console.log('Error occured');
        }
        )
    }
    getAllCategory(){
        
    }
}