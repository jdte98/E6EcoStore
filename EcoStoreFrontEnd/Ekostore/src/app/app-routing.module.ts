import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarClienteComponent } from './Pagina/clientes/actualizar-cliente/actualizar-cliente.component';
import { ClientesComponent } from './Pagina/clientes/clientes.component';
import { ConsultarClienteComponent } from './Pagina/clientes/consultar-cliente/consultar-cliente.component';
import { CrearClienteComponent } from './Pagina/clientes/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from './Pagina/clientes/eliminar-cliente/eliminar-cliente.component';
import { PrincipalClienteComponent } from './Pagina/clientes/principal-cliente/principal-cliente.component';
import { CrearComponent } from './Pagina/form-usuarios/crear/crear.component';
import { FormUsuariosComponent } from './Pagina/form-usuarios/form-usuarios.component';
import { PrincipalUsuarioComponent } from './Pagina/form-usuarios/principal-usuario/principal-usuario.component';
import { PrincipalComponent } from './Pagina/principal/principal.component';
import { ProductosComponent } from './Pagina/productos/productos.component';
import { VentasComponent } from './Pagina/ventas/ventas.component';

const routes: Routes = [
  {path:"",
   component:PrincipalComponent
  },
  {
    path:"usuarios",
    component:FormUsuariosComponent,
    children:[
      {path:"crear", component:CrearComponent},
      {path:"principal-usuarios", component:PrincipalUsuarioComponent}
    ]
  },
  {
    path:"clientes",
    component:ClientesComponent,
    children:[
      {path:"principal", component:PrincipalClienteComponent},
      {path:"crear", component:CrearClienteComponent},
      {path:"actualizar", component:ActualizarClienteComponent},
      {path:"consultar", component:ConsultarClienteComponent},
      {path:"eliminar", component:EliminarClienteComponent}
    ]
  },
  {
    path:"productos",
    component:ProductosComponent
  },
  {
    path:"ventas",
    component:VentasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
