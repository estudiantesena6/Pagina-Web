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
import { Ejercicio9 } from './pages/ejercicio9/ejercicio9';
import { Ejercicio10 } from './pages/ejercicio10/ejercicio10';
import { Ejercicio11 } from './pages/ejercicio11/ejercicio11';
import { Ejercicio12 } from './pages/ejercicio12/ejercicio12';
import { Ejercicio13 } from './pages/ejercicio13/ejercicio13';
import { Ejercicio14 } from './pages/ejercicio14/ejercicio14';
import { Home } from './pages/home/home';
import { Ejercicio15 } from './pages/ejercicio15/ejercicio15';
import { Ejercicio16 } from './pages/ejercicio16/ejercicio16';
import { Ejercicio17 } from './pages/ejercicio17/ejercicio17';
import { Ejercicio18 } from './pages/ejercicio18/ejercicio18';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Ejercicio2,Ejercicio3,Ejercicio4,Ejercicio5,Ejercicio6,Ejercicio7, Ejercicio8,Ejercicio9,Ejercicio10,Ejercicio11,Ejercicio12,Ejercicio13,Ejercicio14,Home,Ejercicio15,Ejercicio16,Ejercicio17,Ejercicio18], // llamar al componente
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
  text: string = 'Hola, Angular';
  name: string = '';

  setName(e: any) {  
    this.name = e; 
}
}
