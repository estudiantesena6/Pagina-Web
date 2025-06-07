import { Component,input } from '@angular/core';

@Component({
  selector: 'app-ejercicio10',
  imports: [],
  templateUrl: './ejercicio10.html',
  styleUrl: './ejercicio10.css'
})
export class Ejercicio10 {
  msg=input<string>('');

}
