import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.scss']
})
export class ConsultarClienteComponent implements OnInit {

  //Get Cliente
  constructor(private objetohttp:HttpClient) { }

  cedula!:string

  cedula_inf!:string
  nombre_inf!:string
  email_inf!:string
  telefono_inf!:string
  direccion_inf!:string

  correct:number = -1

  res: any;
  contenido: any;
  urlapi: string = "http://localhost:8080/api/clientes/cedula/"

  consultarCliente(){
    if(this.cedula == "" || this.cedula == undefined) {
      this.correct = 2;
    } else {
      this.res = this.objetohttp.get(this.urlapi+this.cedula);
      this.res.subscribe((data:any[]) => {
        this.correct = 1;
        this.contenido = data;
        console.log(this.contenido)
        this.cedula_inf = this.contenido.cedulacliente;
        this.nombre_inf = this.contenido.nombrecliente;
        this.email_inf = this.contenido.emailcliente;
        this.telefono_inf = this.contenido.telefonocliente;
        this.direccion_inf = this.contenido.direccioncliente;
  
        this.cedula = ""
      });
    }

  }

  ngOnInit(): void {
  }

}
