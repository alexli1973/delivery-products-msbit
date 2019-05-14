import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private baseUrl = 'https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json';

  constructor(public http: HttpClient) { }

  getItems() {
    return this.http.get(this.baseUrl);
  }
}
