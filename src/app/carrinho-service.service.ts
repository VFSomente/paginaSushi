import { Injectable } from '@angular/core';

export interface ItemCarrinho {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private carrinho: ItemCarrinho[] = [];
  private total: number = 0;

  adicionarItem(item: ItemCarrinho) {
    const index = this.carrinho.findIndex(c => c.id === item.id);
    if (index !== -1) {
      this.carrinho[index].quantidade += item.quantidade;
    } else {
      this.carrinho.push(item);
    }
    this.atualizarTotal();
  }

  removerItem(id: number) {
    const index = this.carrinho.findIndex(item => item.id === id);
    if (index !== -1) {
      this.carrinho.splice(index, 1);
    }
    this.atualizarTotal();
  }

  atualizarTotal() {
    this.total = this.carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  }

  getCarrinho() {
    return this.carrinho;
  }

  getTotal() {
    return this.total;
  }
}
