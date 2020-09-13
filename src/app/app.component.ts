import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio02';
  empleados=[];
  employ:any;
  isss:number = 0.073;
  renta:number = 0.11;
  afp:number = 0.051;
  total:number;
  subtotal:number;
  contador:number=0;
  
  aviso(){
    let nombre:HTMLInputElement = document.querySelector('#first_name');
    let sueldoo:HTMLInputElement = document.querySelector('#sueldo');
    
    if(nombre.value === '' || sueldoo.value === '') { alert("No puedes dejar campos en blanco") }
    else if(parseInt(sueldoo.value) <= 0){ alert("Debe ingresar un sueldo mayor a cero") }
    else {
      let sueldo = parseInt(sueldoo.value)
      this.subtotal = (sueldo*this.isss) + (sueldo*this.renta) + (sueldo*this.afp);
      this.total = sueldo - this.subtotal;
      this.employ={"nombre":nombre.value,"isss":(sueldo*this.isss).toFixed(2),"renta":(sueldo*this.renta).toFixed(2),"afp":(sueldo*this.afp).toFixed(2),"bruto":sueldo,"total":this.total.toFixed(2)}
      this.empleados.push(this.employ);
      this.contador++;
      nombre.value = '';
      sueldoo.value = '';
    }
  }
}
