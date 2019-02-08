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
        <input 
          type="text" 
          placeholder="Manager Code"
          formControlName="code">
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

}
