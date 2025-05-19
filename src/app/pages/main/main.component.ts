import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductService, Product } from '../../services/product.service';
import { DefaultMainLayoutComponent } from '../../components/default-main-layout/default-main-layout.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    DefaultMainLayoutComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
      }
    });
  }

  // Preparado para integração futura:
  onEdit(product: Product): void {
    // Implementar função de edição aqui
    console.log('Editar produto:', product);
  }

  onDelete(productId: number): void {
    // Implementar função de remoção aqui
    console.log('Remover produto com ID:', productId);
  }
}
