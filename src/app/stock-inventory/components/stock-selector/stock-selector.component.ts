import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-selector',
  template: `
    <div class="stock-selector" [formGroup]="parent">
      <div formGroupName="selector">
        <select formControlName="product_id">
          <option value="">Select stock</option>
          <option *ngFor="let product of products"
            [value]="product.id">
            {{ product.name }}
          </option>
        </select>
        <!-- <input 
          type="number"
          step="10"
          min="10"
          max="1000"
          formControlName="quantity" /> -->
        <stock-counter
          [step]="10"
          [min]="10"
          [max]="1000"
          formControlName="quantity">
        </stock-counter>  
        <button 
          [disabled]="stockExists || notSelected"
          type="button" 
          (click)="onAdd()">
          Add Stock
        </button>   
        <div 
          class="stock-selector__error"
          *ngIf="stockExists">
          Item already exist in the stock
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {

  @Input()
  parent: FormGroup; 

  @Input()
  products: Product[];

  @Output()
  added = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    this.added.emit(this.parent.get('selector').value);

    
    this.parent.get('selector').reset({
      product_id: '',
      quantity: 10
    })

    // This is othe way to reset only one value
    // this.parent.get('selector').patchValue({
    //   product_id: ''
    // })

    // You need set all the values for the group
    // this.parent.get('selector').reset({
    //   product_id: '',
    //   quantity: 10
    // })
  }

  get notSelected() {
    return (
      !this.parent.get('selector.product_id').value
    )
  }

  get stockExists() {
    return (
      this.parent.hasError('stockExists') &&
      this.parent.get('selector.product_id').dirty
    )
  }

}
