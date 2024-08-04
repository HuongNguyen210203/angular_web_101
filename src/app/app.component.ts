import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CardComponent} from './components/card/card.component';
import {NgForOf} from '@angular/common';
import {CartService} from './services/cart.service';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    NgForOf,
    MatCardActions,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCard,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Demo01';

  constructor(public cartService: CartService) {
  }

  get cart(): any[] {
    return this.cartService.getCart();
  }

  get totalMoney(): number {
    return this.cartService.getTotalMoney();
  }

  addToCart(value: any) {
    console.log('Received value:', value);
    this.cartService.addToCart(value);
    console.log('Product added to cart', this.cart);
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }

  scrollToSection(cardContainer: string) {

  }
}
