import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
  MatTabsModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { ProduitModule } from './produit/produit.module';
import { RendezVousModule } from './rendez-vous/rendez-vous.module';
import { CommandeModule } from './commande/commande.module';
import { FormsModule } from '@angular/forms';

const matModules = [
  MatTabsModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FormsModule,

    ProduitModule,
    RendezVousModule,
    CommandeModule,

    ...matModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    const user = {
      id: 1,
      nom: 'Kévin',
      prenom: 'DOS SANTOS',
      adresse: '3 Boulevard Voltaire 21000 Dijon',
      telephone: '0623456712',
      mail: 'dos_santos.kevin@bbox.fr',
    };
    localStorage.setItem('user', JSON.stringify(user));

    if (!localStorage.getItem('pricePerKg')) {
      localStorage.setItem('pricePerKg', '2');
    }
  }
}
