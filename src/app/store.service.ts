import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders, HttpParameterCodec, HttpClientModule } from "@angular/common/http";
import { Store } from "./store";

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
export class StoreService {

  private storesUrl="http://139.59.95.130:8000/api/stores/";

  constructor(private client : HttpClient) { }

  getAllStores():Observable<Store[]>{
    return this.client.get<Store[]>(this.storesUrl, httpOptions);
  }

  getStoreById(pk : number):Observable<Store>{
    const url = `${this.storesUrl}${pk}/`;
    return this.client.get<Store>(url);
  }

}
