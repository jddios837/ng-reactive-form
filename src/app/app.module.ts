import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StockInventoryModule } from "./stock-inventory/stock-inventory.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StockInventoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
