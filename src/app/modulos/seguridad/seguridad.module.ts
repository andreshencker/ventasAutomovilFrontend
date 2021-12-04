import { MensajesModule } from './../mensajes/mensajes.module';
import { ComponentesModule } from './../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionClienteComponent } from './identificacion-cliente/identificacion-cliente.component';
import { IdentificacionEmpleadoComponent } from './identificacion-empleado/identificacion-empleado.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IdentificacionClienteComponent,
    IdentificacionEmpleadoComponent,
    RegistroClienteComponent,
    RecuperarContrasenaComponent,
    CambiarContrasenaComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesModule,
    MensajesModule
  ],
  exports:[

  ]
})
export class SeguridadModule { }
