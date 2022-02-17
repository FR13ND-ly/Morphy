import { Injectable } from '@angular/core';
import { products } from './products';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  productList = [...products]
  private productsUpdated = new Subject<any[]>() 

  initialize() {
    this.productsUpdated.next([...this.productList])
  }

  getProductListUpdateListener() {
    return this.productsUpdated.asObservable()
  }

  getProduct(id : any) {
    console.log(products[id - 1])
  }

}