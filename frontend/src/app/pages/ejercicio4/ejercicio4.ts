import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  imports: [],
  templateUrl: './ejercicio4.html',
  styleUrl: './ejercicio4.css'
})
export class Ejercicio4 {
  imagenUrl: string = './auto.jpeg';
  alTextoImagen: string = 'Imagen de un auto';
  botonDeshabilitado: boolean = true;

  // Inicializar el estado del botón deshabilitado
  constructor() {
    setTimeout(() => {
      this.botonDeshabilitado = false;
    }, 3000); // Simular un retraso de 3 segundos antes de habilitar el botón
 }
}
