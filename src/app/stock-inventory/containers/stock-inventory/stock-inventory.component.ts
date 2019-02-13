import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormArray } from "@angular/forms";

import { StockInventoryService } from "../../services/stock-inventory.service";

import { Observable, forkJoin  } from "rxjs";

import { Product, Item } from "../../models/product.interface";
import { map } from "rxjs/operators";


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
					[map]="productMap"
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
export class StockInventoryComponent implements OnInit {

	products: Product[] = [];
	productMap: Map<number,Product>;

	constructor(
		private fb: FormBuilder,
		private serviceStock: StockInventoryService
	) {}

	ngOnInit() {
		const cart = this.serviceStock.getCarItems();
		const products = this.serviceStock.getProducts();

		this.serviceStock.getCarItems().subscribe((cart: Item[]) => {
			// console.log('GetCarItems Stock ', cart);
			cart.forEach(item => this.AddStock(item));
		})

		this.serviceStock.getProducts().subscribe((products: Product[]) => {
			// console.log('GetCarItems Stock ', cart);
			const myMap = products.map<[number, Product]>(product => [product.id, product])
			
			this.productMap = new Map<number, Product>(myMap);
			this.products = products;
		})
		
		// forkJoin(cart, products).pipe(map(([cart, products]: [Item[], Product[]]) => {
		// 	console.log('cart', cart);
		// 	console.log('products', products);
		// }));	
	}

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