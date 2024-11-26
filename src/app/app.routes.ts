
import { Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component'; 
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carrinho', component: CarrinhoComponent },
];
