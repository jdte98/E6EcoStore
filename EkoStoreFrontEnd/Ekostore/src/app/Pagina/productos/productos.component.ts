import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor(private productosservice:ProductosService, private objetohttp:HttpClient) { }

  resultados:any;
  file!:File;

  res: any;
  contenido: any;
  urlapi: string = "http://localhost:8080/api/productos";
  

  onChange(event:any){
    this.file=event.target.files[0];
  }

  correct:number = -1;

  async onUpload(){
    this.resultados = await this.productosservice.upload(this.file);
    console.log(this.resultados);
    
    this.correct = 1;
    this.res = this.objetohttp.get(this.urlapi);
    this.res.subscribe((data:any[]) => {
      this.contenido = data;
      console.log(this.contenido);
    });
  }


  eliminarProductos() {
    this.res = this.objetohttp.delete("http://localhost:8080/api/productos");
    this.correct = 2;
  }

  mostrarProductos() {
    this.res = this.objetohttp.get(this.urlapi);
    this.res.subscribe((data:any[]) => {
      this.contenido = data;
      console.log(this.contenido);
    });
    this.correct = 3;
  }
 

  ngOnInit(): void {
  }

}
