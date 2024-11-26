import { Injectable } from '@angular/core';
import { ItemCarrinho } from './carrinho/carrinho.component';  // Caminho do item

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private carrinho: ItemCarrinho[] = [];  // Carrinho armazenado

  constructor() {}

  // Obter todos os itens do carrinho
  getCarrinho(): ItemCarrinho[] {
    return this.carrinho;
  }

  // Obter o total do carrinho
  getTotal(): number {
    return this.carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }

  // Adicionar um item ao carrinho
  adicionarItem(item: ItemCarrinho): void {
    const itemExistente = this.carrinho.find((i) => i.id === item.id);
    if (itemExistente) {
      itemExistente.quantidade += item.quantidade; // Se o item já existe, apenas aumenta a quantidade
    } else {
      this.carrinho.push(item); // Se não existe, adiciona um novo item ao carrinho
    }
  }

  // Remover um item do carrinho
  removerItem(id: number): void {
    this.carrinho = this.carrinho.filter(item => item.id !== id);  // Filtra o item que será removido
  }

  // Atualizar a quantidade de um item no carrinho
  atualizarQuantidade(id: number, quantidade: number): void {
    const item = this.carrinho.find(i => i.id === id); // Encontra o item pelo ID
    if (item) {
      item.quantidade = quantidade; // Atualiza a quantidade do item
    }
  }

  // Limpar todo o carrinho
  limparCarrinho(): void {
    this.carrinho = [];  // Reseta o carrinho para um array vazio
  }
}
