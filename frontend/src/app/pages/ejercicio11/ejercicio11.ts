import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejercicio11',
  imports: [],
  templateUrl: './ejercicio11.html',
  styleUrl: './ejercicio11.css'
})
export class Ejercicio11 {
  @Output()
  login: EventEmitter<string> = new EventEmitter<string>();
  userName:string ='jose';
  handleLogin(){
    this.login.emit(this.userName);
  }

}
