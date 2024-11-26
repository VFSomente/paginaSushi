<<<<<<< Updated upstream
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
=======
import { Component } from '@angular/core';
import { CartService, Product } from '../services/cart.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,  // Certifique-se de que o componente é standalone
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalPrice = 0;
    alert('Carrinho esvaziado!');
  }
}

>>>>>>> Stashed changes
