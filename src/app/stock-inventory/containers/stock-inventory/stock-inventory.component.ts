import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormArray } from "@angular/forms";

import { Product } from "../../models/product.interface";

@Component({
	selector: 'stock-inventory',
	styleUrls: ['stock-inventory.component.sass'],
	template: `
		<div class="stock-inventory">
			<form [formGroup]="form" (ngSubmit)="onSubmit()">

				<stock-branch
					[parent]="form">
				</stock-branch>
				
				<stock-selector
					[parent]="form"
					[products]="products"
					(added)="AddStock($event)">
				</stock-selector>

				<stock-productos
					[parent]="form"
					(removed)="removeStock($event)">
				</stock-productos>

				<div class="stock-inventory__buttons">
					<button
						type="submit"
						[disabled]="form.invalid">
						Order Stock
					</button>
				</div>

				<pre>{{ form.value | json }}</pre>
			</form>
		</div>
	`
})
export class StockInventoryComponent {

	products: Product[] = [];

	constructor(
		private fb: FormBuilder
	) {}

	// form = new FormGroup({
	// 	store: new FormGroup({
	// 		branch: new FormControl(''),
	// 		code: new FormControl('')
	// 	}),
	// 	selector: this.createStock({}),
	// 	stock: new FormArray([
	// 		this.createStock({ product_id: 1, quantity: 50 }),
	// 		this.createStock({ product_id: 3, quantity: 34 })
	// 	])
	// });
	
	// Using FormBuilder, is more cleaner use this element than FormGroup
	form = this.fb.group({
		store: this.fb.group({
			branch: '',
			code: ''
		}),
		selector: this.createStock({}),
		stock: this.fb.array([
			// this.createStock({ product_id: 1, quantity: 50 }),
			// this.createStock({ product_id: 3, quantity: 34 })
		])
	});

	createStock(stock) {
		return this.fb.group({
			product_id: parseInt(stock.product_id, 10) || '',
			quantity: stock.quantity || 10,
		})
	}

	onSubmit() {
		console.log('Form data ', this.form);
	}

	AddStock(stock) {
		const control = this.form.get('stock') as FormArray;
		control.push(this.createStock(stock));
	}

	removeStock({ item, index }: {item: FormGroup, index: number}){
		const control = this.form.get('stock') as FormArray;
		control.removeAt(index);
	}
}