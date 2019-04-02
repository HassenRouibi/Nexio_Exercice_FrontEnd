import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Product } from "../product";
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string= 'http://localhost:8080/api'
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers: this.headers})
  constructor(private _http:Http) { }

  getProducts() {
      return this._http.get(this.baseUrl+'/products', this.options).map((response:Response) => response.json())
        .catch(this.errorHandler);
    }

  getProduct(id: number) {
    return this._http.get(this.baseUrl+'/product/'+ id, this.options).map((response:Response) => response.json())
      .catch(this.errorHandler);
  }

  createProduct(product: Product) {
    return this._http.post(this.baseUrl+'/product/', JSON.stringify(product)).map((response:Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error:Response){
    return Observable.throw(error ||"Server error");
    }
}
