import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio9',
  imports: [],
  templateUrl: './ejercicio9.html',
  styleUrl: './ejercicio9.css'
})
export class Ejercicio9 {
  @Input()  // Decorador Input para recibir datos desde el componente padre
  msg: string = ''; // Propiedad para almacenar el mensaje recibido
}
