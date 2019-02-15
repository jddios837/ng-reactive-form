import { Component, OnInit, Input } from '@angular/core';

import { FormGroup } from "@angular/forms";

@Component({
  selector: 'stock-branch',
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        <input 
          type="text" 
          placeholder="Branch Id"
          formControlName="branch">
          <div                
            class="error" *ngIf="required('branch')">
            The Branch is required
          </div>
          <div                
            class="error" *ngIf="invalid">
            Invalid branch code: 1 letter, 3 numbers
          </div>
        <input 
          type="text" 
          placeholder="Manager Code"
          formControlName="code">
          <div
            class="error" *ngIf="required('code')">
            The Code is required  
          </div>
      </div>
    </div>
  `,
  styleUrls: ['./stock-branch.component.scss']
})
export class StockBranchComponent implements OnInit {

  @Input()
  parent: FormGroup; 

  constructor() { }

  ngOnInit() {
  }

  get invalid() {
    return (
      this.parent.get('store.branch').hasError('invalidBranch') &&
      this.parent.get('store.branch').dirty &&
      !this.required('branch')
    )
  }

  required(name: string) {
    return(
      this.parent.get(`store.${name}`).hasError('required') && 
      this.parent.get(`store.${name}`).touched
    )
  }

}
