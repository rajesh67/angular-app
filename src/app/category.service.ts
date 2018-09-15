import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Category } from "./category";
import { Offer } from "./offer";

const httpOptions = {
  headers: new HttpHeaders({
    'Accept':  'application/json',
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private categoriesUrl="http://139.59.95.130:8000/api/categories/";

  constructor(private client : HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.client.get<Category[]>(this.categoriesUrl, httpOptions);
  }

  getCategoryById(pk:number):Observable<Category>{
    const url = `${this.categoriesUrl}${pk}/`;
    return this.client.get<Category>(url);
  }

}
