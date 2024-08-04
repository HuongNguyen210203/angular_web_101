import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    NgOptimizedImage,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(public cartService: CartService) {}

  addToCart(value: any) {
    this.cartService.addToCart(value);
  }

  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
  @Input() inStock: number = 0;
  @Input() imageUrl: string | undefined = '';
}
