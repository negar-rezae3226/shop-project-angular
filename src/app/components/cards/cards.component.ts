import { Component, Input, OnInit } from '@angular/core';
import { ProductDto } from "src/app/models/product-dto.model";
import { ProductService } from "src/app/service/product-api.service";


@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],

})
export class CardsComponent implements OnInit {


  allProducts: any[] = [];



  constructor(private productService: ProductService) { }

  ngOnInit(): void {


    this.productService.getAllProducts()
      .then((res) => res.json())
      .then((json) => {
        this.allProducts = json.products;
        console.log(this.allProducts);
      });

    //  let allProducts = this.productApi.getAllProducts();
    //  console.log('all',allProducts);

    // this.productService


  }

}
