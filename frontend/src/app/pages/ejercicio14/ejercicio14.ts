import { Component } from '@angular/core';
import Product from '../../models/product';

@Component({
  selector: 'app-ejercicio14',
  imports: [],
  templateUrl: './ejercicio14.html',
  styleUrl: './ejercicio14.css'
})
export class Ejercicio14 {
  product: Product;
  constructor() {
    this.product = {
      name: 'Camiseta',
      price: 20,
      isforsale: true
    };
  }
  
}
