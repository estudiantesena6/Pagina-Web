import { Component } from '@angular/core'; // Importamos el decorador Component de Angular core

@Component({
  selector: 'app-ejercicio8', 
  imports: [],
  templateUrl: './ejercicio8.html',
  styleUrl: './ejercicio8.css'
}) 
 // Bucle para repetir un bloque recorriendo el contenido ejemplo de un objeto como se muestra a continuacion
export class Ejercicio8 { // Toda la funcionalidad del componente está contenida dentro de esta clase

  // es unas tarjetas que muestra un producto con su nombre, precio e imagen
  productos: any[] = [ // se declara los objeto que es tipo any[] para que pueda recibir cualquier tipo de dato
  { id: 1, nombre: 'auto', precio: 1000, img: './auto.jpeg' },
  { id: 2, nombre: 'bicicleta', precio: 564, img: './bicibleta.jpeg' },
  { id: 3, nombre: 'camioneta', precio: 13234, img: './camioneta.jpeg' },
  { id: 4, nombre: 'camisas', precio: 13243, img: './auto.jpeg' },
  { id: 5, nombre: 'lenguaje de programación', precio: 500, img: './lenguaje de programacion.jpg' },
   { id: 6, nombre: 'maquillaje', precio: 100, img: './maquillague.jpeg' } 
];
}

