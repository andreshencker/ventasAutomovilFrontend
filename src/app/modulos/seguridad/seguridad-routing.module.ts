import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { IdentificacionClienteComponent } from './identificacion-cliente/identificacion-cliente.component';
import { IdentificacionEmpleadoComponent } from './identificacion-empleado/identificacion-empleado.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';

const routes: Routes = [
  {
    path:'cambiarContrasena',
    component:CambiarContrasenaComponent
  },
  {
    path:'identificacionCliente',
    component:IdentificacionClienteComponent
  },
  {
    path:'identificacionEmpleado',
    component:IdentificacionEmpleadoComponent
  },
  {
    path:'recuperarContrasena',
    component:RecuperarContrasenaComponent
  },
  {
    path:'registrarCliente',
    component:RegistroClienteComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
