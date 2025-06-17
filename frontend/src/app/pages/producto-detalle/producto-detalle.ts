import { Component } from '@angular/core';
import { Header } from "../../component/header/header";
import { ActivatedRoute } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-producto-detalle',
  imports: [Header],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css'
})
export class ProductoDetalle {
  constructor(private route:ActivatedRoute) {
    const product=route.snapshot.params['product'];
    console.log("producto recibido: ", product);
  }

}
