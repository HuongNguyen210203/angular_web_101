import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatButtonModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  detailProduct!: ProductModel;
  selectedSize: string = 'Size M';

  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
  ) {
    const { id } = this.activatedRoute.snapshot.params;
    this.detailProduct = this.cartService.products.find(
      (product) => product.id == parseInt(id),
    ) as ProductModel;
    console.log(this.detailProduct);
  }

  addToCart(product: ProductModel) {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      size: this.selectedSize,
    });
  }
}
