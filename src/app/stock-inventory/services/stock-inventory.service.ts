import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

// import { Item, Product } from "../models/product.interface";

import { Observable, of, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/cat';
// import 'rxjs/add/Observable/throw';

import { environment } from "../../../environments/environment";
  
const SERVE_URL = environment.url_component;

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {

  constructor(
    private _http: HttpClient
  ) { }

  getCarItems() {
    return this._http
              .get(SERVE_URL + '/cart')
              .pipe(
                map(responce=> responce),
                catchError(err => of('error found'))
              );
  }

  getProducts() {
    return this._http
              .get(SERVE_URL + '/products')
              .pipe(
                map(responce=> responce),
                catchError(err => of('error found'))
              );
  }
}
