import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class StockhandlingService {
  private endpoint = 'backendurl/create';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {}

  public create(product: Product): Observable<any> {
    console.log(product);
    return this.httpClient.post<any>(this.endpoint, product, this.httpOptions);
  }

  public getProduct(productId: number): Observable<any> {
    console.log(productId);
    return this.httpClient.post<any>(
      this.endpoint,
      productId,
      this.httpOptions
    );
  }
}
