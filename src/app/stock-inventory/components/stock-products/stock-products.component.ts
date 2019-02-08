import { Component, OnInit, Input } from '@angular/core';

import { FormGroup } from "@angular/forms";

@Component({
  selector: 'stock-productos',
  template: `
    <div class="stock-products" [formGroup]="parent">
    </div>
  `,
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {

  @Input()
  parent: FormGroup; 

  constructor() { }

  ngOnInit() {
  }

}
