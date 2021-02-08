import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product;
  items = this.cartService.getItems();
  total = this.cartService.getShippingTotal();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }


  onSubmit(): void {
    this.items = this.cartService.clearCart();
    this.total= 0;
    console.warn('Your order has been submitted',
    this.checkoutForm.value);
    this.checkoutForm.reset();

  }
  deleteItem(product){
    this.cartService.deleteItem(product);
    window.alert('Product has been removed from cart');
    this.total = this.cartService.getShippingTotal();

  }

  ngOnInit(): void {

  }

}
