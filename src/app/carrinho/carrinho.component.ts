import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho-service.service';  // Certifique-se de que o caminho está correto
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


export interface ItemCarrinho {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  Imagem: string;
}

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CarrinhoComponent implements OnInit {
  carrinho: ItemCarrinho[] = [];  // Lista de itens no carrinho
  total: number = 0;  // Total da compra

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    // Inicializar os dados do carrinho e o total quando o componente for carregado
    this.carregarCarrinho();
  }

  carregarCarrinho(): void {
    // Carregar os itens do carrinho e o total atualizado do serviço
    this.carrinho = this.carrinhoService.getCarrinho();
    this.total = this.carrinhoService.getTotal();
  }

  removerItem(id: number): void {
    // Remover o item do carrinho usando o serviço
    this.carrinhoService.removerItem(id);
    this.carregarCarrinho();  // Recarregar o carrinho e o total após remoção
  }

  atualizarQuantidade(id: number, quantidade: number): void {
    // Verifica se a quantidade é válida antes de atualizar
    if (quantidade > 0) {
      this.carrinhoService.atualizarQuantidade(id, quantidade);
      this.carregarCarrinho();  // Recarregar o carrinho e o total após atualização
    }
  }

  limparCarrinho(): void {
    // Limpar todos os itens do carrinho
    this.carrinhoService.limparCarrinho();
    this.carregarCarrinho();  // Recarregar o carrinho e o total após limpeza
  }

  finalizarCompra(): void {
    // Lógica de finalização da compra (pode incluir redirecionamento ou chamada de API)
    alert('Compra Finalizada! Total: R$ ' + this.total.toFixed(2));
    this.limparCarrinho();  // Limpar o carrinho após finalização
  }
}
