import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  constructor(private clientehttp: HttpClient) { }

  apiUrl: string = "http://localhost:8080/api/";
  consecutivo!: any;

  getConsecutivo(){
    this.clientehttp.get(this.apiUrl + "ventas/consecutivo").subscribe((data) => {
      this.consecutivo = data;
      this.consecutivo ++;
      console.log(this.consecutivo);
    })
  }

  cedulacliente !: any;
  clientedata: any;
  getCliente() {
    this.clientehttp.get(this.apiUrl + "clientes/cedula/" + this.cedulacliente). subscribe((data) => {
      this.clientedata = data;
      console.log(this.clientedata);
    })
  }

  //Productos
  p1: any;
  p2: any;
  p3: any;
  //Codigo prodcutos
  cp1: any;
  cp2: any;
  cp3: any;

  getProducto(np: number) {
    switch (np) {
      case 1:
        this.clientehttp.get(this.apiUrl + "productos/codigo/" + this.cp1).subscribe((data)=>{
          this.p1 = data;
          console.log(this.p1);
        });
        break;
      case 2:
        this.clientehttp.get(this.apiUrl + "productos/codigo/" + this.cp2).subscribe((data)=>{
          this.p2 = data;
          console.log(this.p2);
        });
        break;
      case 3:
        this.clientehttp.get(this.apiUrl + "productos/codigo/" + this.cp3).subscribe((data)=>{
          this.p3 = data;
          console.log(this.p3);
        });
        break;
      default:
        break;
    }
  }

  //Precio del producto y la cantidad n
  preciop1: any;
  np1: any;
  preciop2: any;
  np2: any;
  preciop3: any;
  np3: any;

  calcPrecioPro(npro: number){
    switch (npro) {
      case 1:
        this.preciop1 = this.np1 * this.p1[0].precioventa;
        break;
      case 2:
        this.preciop2 = this.np2 * this.p2[0].precioventa;
        break;
      case 3:
        this.preciop3 = this.np3 * this.p3[0].precioventa;
        break;    
      default:
        break;
    };
    this.calcTotales();
  }

  totalVenta: number = 0.0;
  totalConIva: number = 0.0;
  totalIva: number = 0.0;
  calcTotales(){
    this.totalVenta = 0.0;
    if (this.preciop1 != null && this.preciop1 != undefined && this.preciop1 != "") {
      this.totalVenta = this.preciop1;
      this.totalIva = (this.totalVenta) * 0.19;
      this.totalConIva = this.totalIva + ((this.totalVenta) * 0.19);
    }
    if (this.preciop2 != null && this.preciop2 != undefined && this.preciop2 != "") {
      this.totalVenta = this.preciop2;
      this.totalIva = (this.totalVenta) * 0.19;
      this.totalConIva = this.totalIva + ((this.totalVenta) * 0.19);
    }
    if (this.preciop3 != null && this.preciop3 != undefined && this.preciop3 != "") {
      this.totalVenta = this.preciop3;
      this.totalIva = (this.totalVenta) * 0.19;
      this.totalConIva = this.totalIva + ((this.totalVenta) * 0.19);
    }
    console.log(this.totalVenta)
    console.log(this.totalIva)
    console.log(this.totalConIva)
  }

  notif: number = -1;
  codRespuesta: any;
  listaDetalleVenta = Array();
  ciudad: any;
  postVenta() {
    if (this.preciop1 != null && this.preciop1 != undefined && this.preciop1 != "") {
      let aux = {
        "cantidadproducto": this.np1,
        "codigoproducto": this.cp1,
        "valoriva": this.preciop1 * 0.19,
        "valortotal": this.preciop1,
        "valorventa": (this.preciop1 * 0.19) * this.preciop1
      }
      this.listaDetalleVenta.push(aux);
    }
    if (this.preciop2 != null && this.preciop2 != undefined && this.preciop2 != "") {
      let aux = {
        "cantidadproducto": this.np2,
        "codigoproducto": this.cp2,
        "valoriva": this.preciop2 * 0.19,
        "valortotal": this.preciop2,
        "valorventa": (this.preciop2 * 0.19) * this.preciop2
      }
      this.listaDetalleVenta.push(aux);
    }
    if (this.preciop3 != null && this.preciop3 != undefined && this.preciop3 != "") {
      let aux = {
        "cantidadproducto": this.np3,
        "codigoproducto": this.cp3,
        "valoriva": this.preciop3 * 0.19,
        "valortotal": this.preciop3,
        "valorventa": (this.preciop3 * 0.19) * this.preciop3
      }
      this.listaDetalleVenta.push(aux);
    }
    this.clientehttp.post(this.apiUrl + "ventas", 
    {
      "cedulacliente": this.cedulacliente,
      "codigoventa": this.consecutivo,
      "detalleventa": this.listaDetalleVenta,
      "ivaventa": this.totalIva,
      "totalventa": this.totalConIva,
      "valorventa": this.totalVenta
    }, {
      observe: 'response'
    }).subscribe(
      (response: any) => {
        this.codRespuesta = response.status;

        switch (this.codRespuesta) {
          case 201:
            //Venta exitosa
            this.notif = 1;
            break;
          case 226:
            //Codigo de venta duplicado
            this.notif = 2;
            break;
          case 500:
            //Error al intentar acceder al servidor
            this.notif = 0;
            break;        
          default:
            break;
        }
      }
    );
  }

  PostConsolidado() {
    console.log(this.ciudad)
    console.log(typeof this.ciudad)
    this.clientehttp.post(this.apiUrl + "consolidados/agregar/" + this.ciudad, {}, {observe:"response"}).subscribe((response: any) => {
      console.log(response.status)
    });
  }

  reload() {
    window.location.reload()
  }

  ngOnInit(): void {
    this.clientedata = {"nombrecliente": ""}
    this.p1 = [{"nombreproducto": ""}]
    this.p2 = [{"nombreproducto": ""}]
    this.p3 = [{"nombreproducto": ""}]
    this.getConsecutivo();
  }

  
  
  
  
  //Funciones para animar los botones
  inObject(n:number){
    switch (n) {
      case 0:
        var btn = document.getElementById("botonP");
        btn?.classList.add("animate__pulse");
        break;
      case 1:
        var btn = document.getElementById("boton1");
        btn?.classList.add("animate__pulse");
        break;
      case 2:
        var btn = document.getElementById("boton2");
        btn?.classList.add("animate__pulse")
        break;
      case 3:
        var btn = document.getElementById("boton3");
        btn?.classList.add("animate__pulse")
        break;    
      case 4:
        var btn = document.getElementById("boton4");
        btn?.classList.add("animate__pulse")
        break;    
      default:
        break;
    }
  }

  outObject(n:number){
    switch (n) {
      case 0:
        var btn = document.getElementById("botonP");
        btn?.classList.remove("animate__pulse");
        break;
      case 1:
        var btn = document.getElementById("boton1");
        btn?.classList.remove("animate__pulse");
        break;
      case 2:
        var btn = document.getElementById("boton2");
        btn?.classList.remove("animate__pulse")
        break;
      case 3:
        var btn = document.getElementById("boton3");
        btn?.classList.remove("animate__pulse")
        break;    
      case 4:
        var btn = document.getElementById("boton4");
        btn?.classList.remove("animate__pulse");
        break;    
      default:
        break;
    }
  }

}
