import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [`

    `]
})
export class FormularioComponent implements OnInit {

usuario:Object = {
  nombre: null,
  apellido: null,
  email: null,
  pais: '',
  sexo: null,
  terminos: false
}

paises = [{
  codigo: 'MX',
  nombre: 'Mexico'
},{
  codigo: 'ESP',
  nombre: 'Espana'
}]

sexo:string[] = ["Hombre" ,"Mujer", "Otro"]


  constructor() { }

guardar(forma:NgForm){
  console.log(forma);
  console.log('ngForm', forma.value);
  console.log('Usuario', this.usuario);
}



  ngOnInit() {
  }

}
