import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionClienteComponent } from './identificacion-cliente/identificacion-cliente.component';
import { IdentificacionEmpleadoComponent } from './identificacion-empleado/identificacion-empleado.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';


@NgModule({
  declarations: [
    IdentificacionClienteComponent,
    IdentificacionEmpleadoComponent,
    RegistroClienteComponent,
    RecuperarContrasenaComponent,
    CambiarContrasenaComponent,
    CerrarSesionComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
