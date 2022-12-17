import { Injectable, OnInit } from '@angular/core';
import { ProductDto } from '../models/product-dto.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {


  getAllProducts()  {
    return fetch('https://dummyjson.com/products')
  }
  // .then((res) => res.json())
  // .then((json) => {
  //   this.allProducts = json.products;
  //   console.log(this.allProducts);
  //   // createCard();
  // });

}
