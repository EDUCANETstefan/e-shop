import { Injectable } from '@angular/core';
import Token from '../../Token';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from '../models/Category.model';
import {CategoryInfo} from '../models/CategoryInfo.model';
import {Product} from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class CagegoryService {

  constructor(private httpClient: HttpClient) { }

  getCategories() {
    const headers = new HttpHeaders().set(`access-token`, Token.access_token);

    return this.httpClient.get<Category[]>(`/api/categories/`, {headers});
  }

  getCategoryID(id: number) {
    const headers = new HttpHeaders().set(`access-token`, Token.access_token);

    return this.httpClient.get<CategoryInfo>(`/api/categories/` + id, {headers});
  }

  getProduct(id: number) {
    const headers = new HttpHeaders().set(`access-token`, Token.access_token);

    return this.httpClient.get<Product>(`/api/products/` + id, {headers});
  }


}
