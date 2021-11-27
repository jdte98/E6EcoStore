import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
    //Any es para que se adecue a la variable que llegue
  res: any;
  contenido: any;
  urlapi: string = "http://universities.hipolabs.com/search?country=Colombia";
    
  constructor(private objetohttp:HttpClient){}

  //Realiza una accion antes de cargar la pagina (hacer el consumo de la api)
  ngOnInit(): void {
    this.res = this.objetohttp.get(this.urlapi);
    //"subscribe" se mete en el archivo JSON y lo lee
    this.res.subscribe((data:any[]) => {
      this.contenido = data;
      console.log(this.contenido);
    }
    );
  }
  
}

