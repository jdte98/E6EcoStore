import { getLocaleTimeFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  apiURL:string = "http://localhost:8080/api/productos"

  constructor(private objetohttp:HttpClient) { }

  //Para cada dato tendre una respuesta
  resultados=Array();

  //Funcion que leera el archivo y ver su contenido como una promes 
  //pero puede que si o que no pero me da algun tipo de información
  upload(file:any):Promise<any[]> {
    //resolve: cumplio la promesa reject: no la cumplio
    return new Promise<any[]>((resolve, reject)=>{
      var reader = new FileReader(); //quien va y lee el archivo
      reader.onloadend = (e)=>{ //cuando se termine de cargar se empieza a leer
        //se almacena la info en la variable contenido
        let contenido:string = reader.result as string; 
        //Se va a separar el contenido en filas con cada "\n"
        //Lineas separadas se convierte en una lista de cada una de la lineas
        let lineas_separadas = contenido.split("\n");

        for (let filaactual of lineas_separadas) {
          filaactual.replace(";",",");
          //Separa cada elemento separado por coma
          let columnas = filaactual.split(",");
          //Enviar el contenido del archivo
          this.objetohttp.post(this.apiURL,
            {
              "codigoproducto":columnas[0],
              "nombreproducto":columnas[1],
              "nitprovedor":columnas[2],
              "preciocompra":columnas[3],
              "ivacompra":columnas[4],
              "precioventa":columnas[5]
            },
            {observe:'response'}).subscribe(
            (response:any)=>{
              this.resultados.push(response.status);
            }
          );
        }
        resolve(this.resultados);
      }
      reader.readAsText(file);
    } 
    );
  }
}
