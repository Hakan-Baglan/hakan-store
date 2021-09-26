import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Categories } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getcategory(): Observable<Categories[]>{
    const token: string | null = 'Bearer ' + localStorage.getItem('access_token');
    return this.http.get<Categories[]>(this.url + '/categories', { headers: { authorization: token } })
    .pipe(
      tap(data=>console.log()),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
     let errorMessage:string = "";
    if(err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu"+err.error.message;
    }else{
      errorMessage = "Sistemsel Bir Hata Oluştu"
    }
    return throwError(errorMessage);
  }
}
