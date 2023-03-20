import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  constructor(private httpClient:HttpClient) { }
  getAllProducts() :Observable<any>{
    const productUrl = "https://localhost:3000/products";
    return this.httpClient.get(productUrl)
  }

  createProduct(productBody: any):Observable<Product>{
     const productUrl = "https://localhost:3000/products";
    return this.httpClient.post<Product>(productUrl,productBody)
  }

  viewProduct(productId: number):Observable<Product>{
    const productUrl = "https://localhost:3000/products/"+productId
    return this.httpClient.get<Product>(productUrl)
  }
  updateProduct(productId: number,productBody: any):Observable<Product>{
    const productUrl = "https://localhost:3000/products/"+productId;
    return this.httpClient.put<Product>(productUrl,productBody)
  }
  deleteProduct(productId: string):Observable<Product>{
    const productUrl = "https://localhost:3000/products/"+productId;
    return this.httpClient.delete<Product>(productUrl+productId)
  }
  
  
}
