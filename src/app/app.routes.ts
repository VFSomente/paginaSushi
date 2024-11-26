import { Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component'; // Importe o componente carrinho corretamente
import { AppComponent } from './app.component';

// Defina as rotas da aplicação
export const routes: Routes = [
  { path: '', component: AppComponent },  // Página inicial, caso haja uma
  { path: 'carrinho', component: CarrinhoComponent }, // Rota para o Carrinho
];
