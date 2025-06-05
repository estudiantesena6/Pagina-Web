// importa la ruta del componente
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Ejercicio2 } from './pages/ejercicio2/ejercicio2';
import { Ejercicio3 } from './pages/ejercicio3/ejercicio3';
import { Ejercicio4 } from './pages/ejercicio4/ejercicio4';
import { Ejercicio5 } from './pages/ejercicio5/ejercicio5';
import { Ejercicio6 } from './pages/ejercicio6/ejercicio6';
import { Ejercicio7 } from './pages/ejercicio7/ejercicio7'; 
import { Ejercicio8 } from './pages/ejercicio8/ejercicio8';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Ejercicio2,Ejercicio3,Ejercicio4,Ejercicio5,Ejercicio6,Ejercicio7, Ejercicio8], // llamar al componente
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
