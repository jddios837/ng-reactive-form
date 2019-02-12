import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {

  constructor(
    private _http: HttpClient
  ) { }

  getCarItems() {
    // return this._http
    //           .get('/cart')
    //           .map((response: Response))
    //           .catch((error: any) => Observable.throw(error.json()));
  }
}
