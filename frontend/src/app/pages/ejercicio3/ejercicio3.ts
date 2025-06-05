import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  imports: [],
  templateUrl: './ejercicio3.html',
  styleUrl: './ejercicio3.css'
})
export class Ejercicio3 {
  suma:number = 0;
  incrementar() {
    this.suma++;
  }
}
