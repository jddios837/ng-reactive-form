import { Component } from "@angular/core";
import { FormControl, FormGroup, FormArray } from "@angular/forms";

@Component({
	selector: 'stock-inventory',
	styleUrls: ['stock-inventory.component.sass'],
	template: `
		<div class="stock-inventory">
			<form [formGroup]="form" (ngSubmit)="onSubmit()">
				<div formGroupName="store">
					<input 
						type="text" 
						placeholder="Branch Id"
						formControlName="branch">
					<input 
						type="text" 
						placeholder="Manager Code"
						formControlName="code">
				</div>

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
	form = new FormGroup({
		store: new FormGroup({
			branch: new FormControl(''),
			code: new FormControl('')
		})
	});

	onSubmit() {
		console.log('Form data ', this.form);
	}
}