import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio8',
  imports: [],
  templateUrl: './ejercicio8.html',
  styleUrl: './ejercicio8.css'
})
export class Ejercicio8 {
  productos: any[] = [
  { id: 1, nombre: 'auto', precio: 1000, img: './auto.jpeg' },
  { id: 2, nombre: 'bicicleta', precio: 564, img: './bicibleta.jpeg' },
  { id: 3, nombre: 'camioneta', precio: 13234, img: './camioneta.jpeg' },
  { id: 4, nombre: 'camisas', precio: 13243, img: './auto.jpeg' },
  { id: 5, nombre: 'lenguaje de programación', precio: 500, img: './lenguaje de programacion.jpg' },
   { id: 6, nombre: 'maquillaje', precio: 100, img: './maquillague.jpeg' } 
];
}

