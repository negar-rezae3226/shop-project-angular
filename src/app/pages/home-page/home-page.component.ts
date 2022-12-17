import { Component , OnInit } from '@angular/core';
// import { APIService } from "src/app/service/api.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  // providers: [APIService]

})
export class HomePageComponent implements OnInit{

    // constructor(private APIService:APIService) {

    // // }
  
    ngOnInit(): void {
  
      //this.getAllProducts();
  
    }

    allProducts: any;

}
