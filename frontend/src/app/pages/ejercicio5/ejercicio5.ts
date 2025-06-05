import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio5',
  imports: [FormsModule], // importo el FormsModule para usar ngModel
  templateUrl: './ejercicio5.html',
  styleUrl: './ejercicio5.css'
})
export class Ejercicio5 {
  nombre: string = '';
}
