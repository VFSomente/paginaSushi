import { Component } from '@angular/core';
<<<<<<< Updated upstream
import { CarrinhoService, ItemCarrinho } from '../carrinho-service.service';
=======
import { CartService, Product } from '../services/cart.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-corpo',
  standalone: true,
  imports: [],
  templateUrl: './corpo.component.html',
  styleUrl: './corpo.component.css'
})
export class CorpoComponent {
<<<<<<< Updated upstream
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

=======
  constructor(private cartService: CartService) {}

  addProductToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} foi adicionado ao carrinho!`);
  }
}
>>>>>>> Stashed changes
