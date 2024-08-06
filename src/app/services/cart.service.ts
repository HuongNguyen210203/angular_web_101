import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(public authService: AuthService) {}

  products: ProductModel[] = [
    {
      id: 1,
      name: 'Nắng',
      description:
        'Sự kết hợp hoàn hảo giữa trà lài và kiwi sẽ mang lại cảm giác tươi mới cho bạn',
      bigDescription:
        'Nắng là sự kết hợp hoàn hảo giữa trái cây và hương lài tự nhiên hoà quyện với mật ong và một chút chanh xanh tạo nên hương vị độc đáo, tươi mới và ngọt ngào. Nắng sẽ giúp bạn cảm thấy sảng khoái và tươi mới sau mỗi ngụm.',
      imageUrl: [
        'https://product.hstatic.net/200000399631/product/nang_dd840ca67504440186053f6512d5c319_1024x1024.jpg',
      ],
      price: 45000,
      inStock: 10,
    },
    {
      id: 2,
      name: 'Trà Chanh',
      description:
        'Hồng trà, chanh và mật ong sẽ giúp bạn cảm thấy khoẻ khoắn hơn',
      price: 35000,
      bigDescription:
        'Trà Chanh là sự kết hợp hoàn hảo giữa hồng trà, chanh và mật ong. Hương thơm của hồng trà kết hợp với vị chua của chanh và ngọt ngào của mật ong tạo nên hương vị độc đáo, tươi mới và ngọt ngào. Trà Chanh sẽ giúp bạn cảm thấy khoẻ khoắn hơn sau mỗi ngụm.',
      imageUrl: [
        '//product.hstatic.net/200000399631/product/tra_dao_chanh_mat_ong_7859040800cc4a61ba5d0eafa0c144fa_grande.jpg',
      ],
      inStock: 20,
    },
    {
      id: 3,
      name: 'Trà Ổi Hồng',
      description:
        'Hương ổi sẽ giúp bạn thư giãn sau một ngày làm việc căng thẳng',
      price: 45000,
      bigDescription:
        'Trà Ổi Hồng là sự kết hợp hoàn hảo giữa hồng trà và hương ổi tự nhiên. Hương thơm của hồng trà kết hợp với hương ổi tạo nên hương vị độc đáo, tươi mới và ngọt ngào. Trà Ổi Hồng sẽ giúp bạn thư giãn sau mỗi ngụm.',
      imageUrl: [
        '//product.hstatic.net/200000399631/product/tra_oi_hong_024650b8120f4fc68137a5e915e27fed_grande.jpg',
      ],
      inStock: 30,
    },
    {
      id: 4,
      name: 'Trà Dâu',
      description:
        'Đây là lựa chọn tuyệt vời cho các tín đồ hồng trà kết hợp với dâu tây ngọt ngào',
      price: 40000,
      bigDescription:
        'Trà Dâu là sự kết hợp hoàn hảo giữa hồng trà và dâu tây tự nhiên. Hương thơm của hồng trà kết hợp với hương dâu tây tạo nên hương vị độc đáo, tươi mới và ngọt ngào. Trà Dâu sẽ giúp bạn cảm thấy ngọt ngào và tươi mới sau mỗi ngụm.',
      imageUrl: [
        '//product.hstatic.net/200000399631/product/tra_thanh_long_dau_f4d8ad8dd4ce42f299e0850e85defafe_grande.jpg',
      ],
      inStock: 20,
    },
    {
      id: 5,
      name: 'Trà Đào',
      description:
        'Hương đào thơm ngon kết hợp với hồng trà sẽ giúp bạn thư giãn',
      price: 40000,
      bigDescription:
        'Hương đào thơm ngon kết hợp với hồng trà sẽ giúp bạn thư giãn. Trà Đào là sự kết hợp hoàn hảo giữa hồng trà và hương đào tự nhiên. Hương thơm của hồng trà kết hợp với hương đào tạo nên hương vị độc đáo, tươi mới và ngọt ngào. Trà Đào sẽ giúp bạn cảm thấy ngọt ngào và tươi mới sau mỗi ngụm.',
      imageUrl: [
        '//product.hstatic.net/200000399631/product/hong_tra_nguyen_la_tran_chau_ae1c9695220b4720bc9a641279dddf9b_grande.jpg',
      ],
      inStock: 20,
    },
    {
      id: 6,
      name: 'Trà Bạc Hà',
      description:
        'Hương bạc hà mát lạnh kết hợp với hồng trà sẽ giúp bạn thư giãn',
      price: 40000,
      bigDescription:
        'Hương bạc hà mát lạnh kết hợp với hồng trà sẽ giúp bạn thư giãn. Trà Bạc Hà là sự kết hợp hoàn hảo giữa hồng trà và hương bạc hà tự nhiên. Hương thơm của hồng trà kết hợp với hương bạc hà tạo nên hương vị độc đáo, tươi mới và ngọt ngào. Trà Bạc Hà sẽ giúp bạn cảm thấy mát lạnh và tươi mới sau mỗi ngụm.',
      imageUrl: [
        '//product.hstatic.net/200000399631/product/matcha_latte_0d1b0d9ae0914815bb771b78ed338e98_grande.jpg',
      ],
      inStock: 20,
    },
    {
      id: 7,
      name: 'Trà Lài',
      description:
        'Hương trà lài thơm ngon kết hợp với hồng trà sẽ giúp bạn thư giãn',
      price: 40000,
      bigDescription:
        'Hương trà lài thơm ngon kết hợp với hồng trà sẽ giúp bạn thư giãn. Trà Lài là sự kết hợp hoàn hảo giữa hồng trà và hương lài tự nhiên. Hương thơm của hồng trà kết hợp với hương lài tạo nên hương vị độc đáo, tươi mới và ngọt ngào. Trà Lài sẽ giúp bạn cảm thấy ngọt ngào và tươi mới sau mỗi ngụm.',
      imageUrl: [
        '//product.hstatic.net/200000399631/product/tra_lai_sua_tran_chau_cd661d498a9547c6b110ac5ebd67feda_grande.jpg',
      ],
      inStock: 20,
    },
    {
      id: 8,
      name: 'Trà Oolong',
      description:
        'Hương trà oolong thơm ngon kết hợp với hồng trà sẽ giúp bạn thư giãn',
      price: 40000,
      bigDescription:
        'Hương trà oolong thơm ngon kết hợp với hồng trà sẽ giúp bạn thư giãn. Trà Oolong là sự kết hợp hoàn hảo giữa hồng trà và hương trà oolong tự nhiên. Hương thơm của hồng trà kết hợp với hương trà oolong tạo nên hương vị độc đáo, tươi mới và ngọt ngào. Trà Oolong sẽ giúp bạn cảm thấy ngọt ngào và tươi mới sau mỗi ngụm.',
      imageUrl: [
        '//product.hstatic.net/200000399631/product/oolong_sua_tran_chau_oolong_c66979e612544904b407fb4a8870b621_grande.jpg',
      ],
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

  //why i can not add to cart
  // addToCart(item: any) {
  //   if (this.authService.currentUser) {
  //     if (this.products[item.id - 1].inStock == 0) {
  //       return;
  //     }
  //     let index = this.cart.findIndex((element) => element.id === item.id);
  //     this.products[item.id - 1].inStock--;
  //     if (index != -1) {
  //       this.cart[index].quantity++;
  //       this.cart[index].price = this.cart[index].price + item.price;
  //     } else {
  //       this.cart.push(item);
  //       this.cart[this.cart.length - 1].quantity = 1;
  //     }
  //   } else {
  //     alert('Please login to add to cart');
  //   }
  // }

  addToCart(item: any) {
    if (this.authService.currentUser) {
      let index = this.cart.findIndex((element) => element.id === item.id);
      let indexProduct = this.products.findIndex(
        (product) => product.id === item.id,
      );

      if (this.products[indexProduct].inStock === 0) {
        return;
      }

      if (index !== -1) {
        this.cart[index].quantity++;
        this.cart[index].price += item.price;
        if (item.size === 'Size L') {
          this.cart[index].price += 5000;
        }
        this.products[indexProduct].inStock--;
      } else {
        let newItem = { ...item, quantity: 1 };
        if (item.size === 'Size L') {
          newItem.price += 5000;
        }
        this.cart.push(newItem);
        this.products[indexProduct].inStock--;
      }
    } else {
      alert('Please login to add to cart');
    }
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }
}
