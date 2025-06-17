import { Routes } from '@angular/router';
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
import { ProductoDetalle } from './pages/producto-detalle/producto-detalle';

export const routes: Routes = [
   {path: "", component: Home},
   {path: "ejercicio3", component: Ejercicio3},
   {path: "ejercicio4", component: Ejercicio4},
   {path: "ejercicio5", component: Ejercicio5},
   {path: "ejercicio6", component: Ejercicio6},
   {path: "ejercicio7", component: Ejercicio7},
   {path: "ejercicio8", component: Ejercicio8},
   {path: "ejercicio9", component: Ejercicio9},
   {path: "ejercicio10", component: Ejercicio10},
   {path: "ejercicio11", component: Ejercicio11},
   {path: "ejercicio12", component: Ejercicio12},
   {path: "ejercicio13", component: Ejercicio13},
   {path: "ejercicio14", component: Ejercicio14},
   {path: "ejercicio15", component: Ejercicio15},
   {path: "ejercicio16", component: Ejercicio16},
   {path: "ejercicio17", component: Ejercicio17},
   {path: "ejercicio18", component: Ejercicio18},
   {path: "productos/:productoID", component: ProductoDetalle}

];