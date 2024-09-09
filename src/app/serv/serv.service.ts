import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products , ProductDetail} from '../models/producst';


@Injectable({
  providedIn: 'root'
})
export class Services {

  private _http = inject(HttpClient);
  private _URL: string = "https://fakestoreapi.com/products";
  private _URL_Products: string = "https://fakestoreapi.com/products/category/";

  

  getProducts(): Observable<Products[]> {
    return this._http.get<Products[]>(this._URL);
  }

  getCategories(): Observable<any> {
    return this._http.get<any>(this._URL + "/categories");
  }

  getDetailProducts(param:number): Observable<ProductDetail> {
    return this._http.get<ProductDetail>(this._URL + "/" + param);
  }

  getProductsCategory(category:String): Observable< Array<Products>> {
    return this._http.get<Array<Products>>(this._URL_Products + category);
  }
  
}