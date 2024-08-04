import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  products = [
    {
      id: 1,
      name: 'Nắng',
      description:
        'Sự kết hợp hoàn hảo giữa trà lài và kiwi sẽ mang lại cảm giác tươi mới cho bạn',
      price: 45000,
      inStock: 10,
    },
    {
      id: 2,
      name: 'Trà Chanh',
      description:
        'Hồng trà, chanh và mật ong sẽ giúp bạn cảm thấy khoẻ khoắn hơn',
      price: 35000,
      inStock: 20,
    },
    {
      id: 3,
      name: 'Trà Ổi Hồng',
      description:
        'Hương ổi sẽ giúp bạn thư giãn sau một ngày làm việc căng thẳng',
      price: 45000,
      inStock: 30,
    },
    {
      id: 4,
      name: 'Trà Dâu',
      description:
        'Đây là lựa chọn tuyệt vời cho các tín đồ hồng trà kết hợp với dâu tây ngọt ngào',
      price: 40000,
      inStock: 20,
    },
  ];

  cart: {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
  }[] = [];

  getCart(): any[] {
    return this.cart;
  }

  getTotalMoney(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  addToCart(item: any) {
    if (this.products[item.id - 1].inStock == 0) {
      return;
    }
    let index = this.cart.findIndex((element) => element.id === item.id);
    this.products[item.id - 1].inStock--;
    if (index != -1) {
      this.cart[index].quantity++;
      this.cart[index].price = this.cart[index].price + item.price;
    } else {
      this.cart.push(item);
      this.cart[this.cart.length - 1].quantity = 1;
    }
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }
}
