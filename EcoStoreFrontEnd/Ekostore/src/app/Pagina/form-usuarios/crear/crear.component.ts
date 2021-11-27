import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  //Post usuario
  constructor(private objetohttp:HttpClient){} 

  nombre!:string
  email!:string
  user!:string
  pass!:string

  correct:number = -1;

  codigoRespuesta!:number; //Tambien puede agregar un null por el signo de admiración
  crearUsuario(){
    if (this.nombre =="" || this.email == "" || this.user == "" || this.pass == "") {
      this.correct = 2;
    } else {
      this.objetohttp.post<any>(
      "http://localhost:8080/api/usuarios",
        {
          "nombreusuario": this.nombre,
          "emailusuario": this.email,
          "username": this.user,
          "password": this.pass
        }, {observe: 'response'} //trae inf extra
      ).subscribe(response=> {
        this.codigoRespuesta = response.status;
        if(this.codigoRespuesta === 201){
          this.correct = 1;
          this.nombre = "";
          this.email = "";
          this.user = "";
          this.pass = "";
        } else {
          this.correct = 0;
          this.nombre = "";
          this.email = "";
          this.user = "";
          this.pass = "";
        }
      });
    }
  }

}
