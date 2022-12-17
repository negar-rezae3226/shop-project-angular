import { Component,Input } from '@angular/core';
import { ProductDto } from 'src/app/models/product-dto.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent  {

  @Input() product:ProductDto={};

  constructor() {
  }

}
