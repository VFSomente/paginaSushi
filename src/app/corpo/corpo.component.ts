import { Component } from '@angular/core';
import { CarrinhoService, ItemCarrinho } from '../carrinho-service.service';

@Component({
  selector: 'app-corpo',
  standalone: true,
  imports: [],
  templateUrl: './corpo.component.html',
  styleUrl: './corpo.component.css'
})
export class CorpoComponent {
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
    adicionarAoCarrinho(item: {id: number, nome: string, preco: number, quantidade: number}) {
      this.carrinhoService.adicionarItem(item);
    }
  }

