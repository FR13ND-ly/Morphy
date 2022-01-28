import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(private productService : ProductsService) { }
  productList : any
  ngOnInit(): void {
    this.productService.getProductListUpdateListener().subscribe((productList) => this.productList = productList)
    this.productService.initialize()
    this.productService.getProduct(9)
  }

}
