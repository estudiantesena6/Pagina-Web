import { Injectable } from '@angular/core';
import Product from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class Producto {
producto:Product;
  constructor() { 
    this. producto = {
      name: 'Camiseta',
      price: 1000,
      isforsale: true
  }
}
setProductName(name: string) {
  this.producto.name = name;
 }
}