import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProducthandlingService {
  private endpoint = 'backendurl/remoradd';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {}

  public handle(productId: number): Observable<any> {
    console.log(productId);
    return this.httpClient.post<any>(
      this.endpoint,
      productId,
      this.httpOptions
    );
  }
}
