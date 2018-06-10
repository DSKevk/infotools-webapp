import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatTabsModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { ProduitModule } from './produit/produit.module';

const matModules = [
  MatTabsModule,
  MatToolbarModule,
  MatIconModule,
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ProduitModule,

    ...matModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
