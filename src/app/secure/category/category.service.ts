import {Injectable} from '@angular/core';
import {Category} from './category';
import {HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { error } from 'selenium-webdriver';
import { environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';
import { Jsonp, URLSearchParams } from '@angular/http'; 
//import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Response } from '@angular/http/src/static_response';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../../messages/message.service';


const API_URL = environment.API_URL;

@Injectable()
export class CategoryService{

    constructor(private http: HttpClient,
        private messageService: MessageService){
        
        
    }
    // findAll(): Observable<any>{
    //     const endPoint = 'category'
    //     let result = this.http.get(API_URL + endPoint)
    //     .map((response: Response) => response);
    //     return result;
    // }
    getAll (): Observable<Category[]> {
        const endPoint = 'category'
        return this.http.get<Category[]>(API_URL + endPoint)
        .pipe(
            tap(categories => this.log('fetched categories')),
            catchError(this.handleError('getCategories', []))
          );
      }
    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            

            




        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }
    create(name: string, parentId: number){
        const endPoint = 'category'
        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var params = new URLSearchParams();
        params.set('name', name);
        if(parentId != undefined) params.set('parentId', parentId.toString());
        let result = this.http.post(API_URL + endPoint, params.toString(), {headers: headers})
            .map((response: Response) => response)
            .catch(err => {
                if(err.status === 200)
                    return Observable.empty();                    
                else
                    return Observable.throw(err);
            });
        return result;
    }


    addCategory (name: string, parentId: number): Observable<HttpResponse<any>> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
          };
        const endPoint = 'category'
        var params = new URLSearchParams();
        params.set('name', name);
        if(parentId != undefined) params.set('parentId', parentId.toString());
        return this.http.post<HttpResponse<any>>(API_URL + endPoint, params.toString(), httpOptions).pipe(
          tap((response: HttpResponse<any>) => console.log(`added cateogyr w/ id=${response}`)),
          catchError(error => {
        
            const res = new HttpResponse({
                body: null,
                headers: error.headers,
                status: error.status,
                statusText: error.statusText,
                url: error.url
            });
    
            return Observable.of(res);

          })
        );
    }
    updateCategory(id: number, name: string): Observable<HttpResponse<any>>{
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };
        const endPoint = 'category/'
        var category = {
            "id": id,
            "name": name
        };
        return this.http.put<HttpResponse<any>>(API_URL + endPoint + id, category, httpOptions).pipe(
            tap((response: HttpResponse<any>) => console.log('added cateogyr w/ id=${response}')),
            // catchError(error => {
          
            //     const res = new HttpResponse({
            //         body: null,
            //         headers: error.headers,
            //         status: error.status,
            //         statusText: error.statusText,
            //         url: error.url
            //     });
      
            //   return Observable.of(res);
            //     catchError(this.handleError<any>('updateHero'))
            // })
            catchError(this.handleError<any>('updateCategory'))
        );
    }
    deleteCategory(id: number): Observable<HttpResponse<any>>{
        const endPoint = 'category/';
        return this.http.delete(API_URL + endPoint + id).pipe(
            catchError(this.handleError<any>('deleteCategory'))
        );
    }

    getById(id: number): Observable<any>{
        const endPoint = 'category/'
        let result = this.http.get(API_URL + endPoint + id)
        .map((response: Response) => response);
        return result;
    }
    private log(message: string) {
        this.messageService.add('HeroService: ' + message);
      }
    
}