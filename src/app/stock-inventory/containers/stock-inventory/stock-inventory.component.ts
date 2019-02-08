import { Component } from "@angular/core";
import { FormControl, FormGroup, FormArray } from "@angular/forms";

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

				<stock-productos
					[parent]="form">
				</stock-productos>
				
				<stock-selector
					[parent]="form"
					[products]="products">
				</stock-selector>

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

	products: Product[] = [
		{ "id": 1, "price": 2800, "name": "Macbook Pro"},
		{ "id": 2, "price": 3500, "name": "Samsum J5 PRO"},
		{ "id": 3, "price": 1900, "name": "VIT P3400"},
		{ "id": 4, "price": 343, "name": "Impresora"},
	];

	form = new FormGroup({
		store: new FormGroup({
			branch: new FormControl(''),
			code: new FormControl('')
		}),
		selector: new FormGroup({
			product_id: new FormControl(''),
			quantity: new FormControl('')
		}),
		stock: new FormArray([])
	});

	onSubmit() {
		console.log('Form data ', this.form);
	}
}