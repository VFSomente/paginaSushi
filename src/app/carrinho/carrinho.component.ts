import { Injectable } from '@angular/core';
import { CarrinhoService } from '../carrinho-service.service';

export interface ItemCarrinho {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarrinhoComponent {
  carrinho: ItemCarrinho[] = [];
  total: number = 0;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.carrinho = this.carrinhoService.getCarrinho();
    this.total = this.carrinhoService.getTotal();
  }

  removerItem(id: number) {
    this.carrinhoService.removerItem(id);
    this.carrinho = this.carrinhoService.getCarrinho();
    this.total = this.carrinhoService.getTotal();
  }
}
