import { Component } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicio17',
  imports: [ ReactiveFormsModule],
  templateUrl: './ejercicio17.html',
  styleUrl: './ejercicio17.css'
})
export class Ejercicio17 {
  movieForm: FormGroup;
  nombre:FormControl;
  duracion:FormControl;
  director:FormControl;

  constructor() {
    this.nombre = new FormControl('',Validators.required);
    this.duracion = new FormControl('',[Validators.required,Validators.max(300)]);
    this.director = new FormControl('',Validators.required);

    this.movieForm = new FormGroup({
      nombre: this.nombre,
      duracion: this.duracion,
      director: this.director
    });
  }
  handleSubmit(): void {
    console.log(this.movieForm.value);
    this.movieForm.reset();
}
}