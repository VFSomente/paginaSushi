import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  getCartItems(): Product[] {
    return this.cartItems;
  }

  addToCart(item: Product): void {
    this.cartItems.push(item);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
