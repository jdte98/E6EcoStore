import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { PrincipalComponent } from './Pagina/principal/principal.component';
import { FormUsuariosComponent } from './Pagina/form-usuarios/form-usuarios.component';
import { CrearComponent } from './Pagina/form-usuarios/crear/crear.component';
import { NavUsuariosComponent } from './Pagina/form-usuarios/nav-usuarios/nav-usuarios.component';
import { PrincipalUsuarioComponent } from './Pagina/form-usuarios/principal-usuario/principal-usuario.component';
import { ProductosComponent } from './Pagina/productos/productos.component';
import { ClientesComponent } from './Pagina/clientes/clientes.component';
import { NavClientesComponent } from './Pagina/clientes/nav-clientes/nav-clientes.component';
import { CrearClienteComponent } from './Pagina/clientes/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './Pagina/clientes/actualizar-cliente/actualizar-cliente.component';
import { ConsultarClienteComponent } from './Pagina/clientes/consultar-cliente/consultar-cliente.component';
import { EliminarClienteComponent } from './Pagina/clientes/eliminar-cliente/eliminar-cliente.component';
import { PrincipalClienteComponent } from './Pagina/clientes/principal-cliente/principal-cliente.component';
import { VentasComponent } from './Pagina/ventas/ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NabvarComponent,
    PrincipalComponent,
    FormUsuariosComponent,
    CrearComponent,
    NavUsuariosComponent,
    PrincipalUsuarioComponent,
    ProductosComponent,
    ClientesComponent,
    NavClientesComponent,
    CrearClienteComponent,
    ActualizarClienteComponent,
    ConsultarClienteComponent,
    EliminarClienteComponent,
    PrincipalClienteComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
