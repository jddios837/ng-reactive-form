import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { StockInventoryComponent } from "./containers/stock-inventory/stock-inventory.component";
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';

import { StockInventoryService } from "./services/stock-inventory.service";
import { StockCounterComponent } from './components/stock-counter/stock-counter.component';
@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockSelectorComponent,
    StockProductsComponent,
    StockCounterComponent
  ],
  providers: [
    StockInventoryService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    StockInventoryComponent
  ]
})
export class StockInventoryModule { }
