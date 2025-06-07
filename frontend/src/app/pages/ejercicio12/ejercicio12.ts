import { Component, output} from '@angular/core';

@Component({
  selector: 'app-ejercicio12',
  imports: [],
  templateUrl: './ejercicio12.html',
  styleUrl: './ejercicio12.css'
})
export class Ejercicio12 {
  login=output<any>();
  userName: string = 'jose ricardo silva donayre';

  

  handleLogin()  {
    this.login.emit(this.userName);
  }
}
 //@Output() login = new EventEmitter<string>();