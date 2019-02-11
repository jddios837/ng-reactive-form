import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: 'stock-productos',
  template: `
    <div class="stock-products" [formGroup]="parent">   
      <div formArrayName="stock">
        <div 
          *ngFor="let item of stocks; let i = index;">
          <div class="stock-product__content" [formGroupName]="i">
            <div class="stock-product__name">
              {{ item.value.product_id }}
            </div>
            <input
              type="number"
              step="10" 
              min="10"
              max="1000"
              formControlName="quantity">
            <button type="button">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {

  @Input()
  parent: FormGroup; 

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  constructor() { }

  ngOnInit() {
  }

}
