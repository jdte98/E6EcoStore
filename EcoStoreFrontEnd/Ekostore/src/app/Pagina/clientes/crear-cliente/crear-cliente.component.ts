import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent{

  constructor(private objetohttp:HttpClient) { }

  nombre!:string
  cedula!:string
  email!:string
  telefono!:string
  direccion!:string

  correct:number = -1

  codigoRespuesta!:number;

  crearCliente(){
    if (this.nombre == "" || this.cedula == "" || this.email == "" || this.telefono == "" || this.direccion == "" || this.nombre == undefined || this.cedula == undefined || this.email == undefined || this.telefono == undefined || this.direccion == undefined){
      this.correct = 2;
    } else {
      this.objetohttp.post<any>(
        "http://localhost:8080/api/clientes",
        {
          nombrecliente: this.nombre,
          cedulacliente: this.cedula,
          emailcliente: this.email,
          telefonocliente: this.telefono,
          direccioncliente: this.cedula
        },{observe: 'response'}
      ).subscribe(response =>{
        this.codigoRespuesta = response.status;
        //Depende del valor del codigo se vacian las cajas y el valor de correct para lanzar los errores
        if (this.codigoRespuesta === 201) {
          this.correct = 1;
          this.nombre = "";
          this.cedula = "";
          this.email = "";
          this.telefono = "";
          this.direccion = "";
        } else {
          this.correct = 0;
          this.nombre = "";
          this.cedula = "";
          this.email = "";
          this.telefono = "";
          this.direccion = "";
        }
      });
    }
  }

}
