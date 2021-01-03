import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProducthandlingService {
  private endpoint = 'http://127.0.0.1:8000/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {}

  public add(productId: number): Observable<any> {
    console.log(productId);
    return this.httpClient.post<any>(
      this.endpoint + 'inv/add',
      productId,
      this.httpOptions
    );
  }

  public remove(productId: number): Observable<any> {
    console.log(productId);
    return this.httpClient.post<any>(
      this.endpoint + 'inv/rem',
      productId,
      this.httpOptions
    );
  }

  public getProducts(): Observable<any> {
    return this.httpClient.get<any>(
      this.endpoint + 'inv/getall',
      this.httpOptions
    );
  }
}
