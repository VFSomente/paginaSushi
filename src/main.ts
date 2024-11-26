import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';  // Componente raiz
import { routes } from './app/app.routes';  // Definição das rotas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Provê as rotas para o Angular
    provideHttpClient(),    // Provê o HttpClient para requisições
  ]
}).catch((err) => console.error(err));








// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   standalone: true,  
//   templateUrl: '../src/app/app.component.html',
//   styleUrls: ['../src/app/app.component.css']
// })


// export class AppComponent {
  

  // title = 'SushiDelivery';

  // // Definindo os produtos
  // produtos = [
  //   { id: 1, nome: 'Sushi Salmão', preco: 29.99, quantidade: 1 },
  //   { id: 2, nome: 'Sushi California', preco: 29.99, quantidade: 1 },
  //   { id: 3, nome: 'Sushi Hot', preco: 29.99, quantidade: 1 },
  //   { id: 4, nome: 'Sushi Empanado com Camarão', preco: 29.99, quantidade: 1 },
  //   { id: 5, nome: 'Combo Pequeno', preco: 49.99, quantidade: 1 },
  //   { id: 6, nome: 'Combo Médio', preco: 99.99, quantidade: 1 },
  //   { id: 7, nome: 'Combo Grande', preco: 149.99, quantidade: 1 },
  //   { id: 8, nome: 'Temaki Salmão', preco: 39.99, quantidade: 1 },
  //   { id: 9, nome: 'Temaki Salmão Creem Cheese', preco: 79.99, quantidade: 1 },
  //   { id: 10, nome: 'Temaki Empanado', preco: 49.99, quantidade: 1 }
  // ];

  // // Carrinho de compras
  // carrinho: any[] = [];

  // // Função para adicionar ao carrinho
  // adicionarAoCarrinho(produto: any) {
  //   const produtoExistente = this.carrinho.find(item => item.id === produto.id);

  //   if (produtoExistente) {
  //     // Se o produto já está no carrinho, aumenta a quantidade
  //     produtoExistente.quantidade++;
  //   } else {
  //     // Caso contrário, adiciona o produto ao carrinho
  //     this.carrinho.push({ ...produto });
  //   }
  // }

  // // Função para calcular o total do carrinho
  // calcularTotal(): number {
  //   return this.carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
  // }

  
