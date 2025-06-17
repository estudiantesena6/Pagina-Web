
import { Component } from '@angular/core';
import { Producto } from '../../services/producto';

@Component({
  selector: 'app-ejercicio18',
  imports: [],
  templateUrl: './ejercicio18.html',
  styleUrl: './ejercicio18.css'
})
export class Ejercicio18 {
  constructor(public ProductService: Producto) {}

}
