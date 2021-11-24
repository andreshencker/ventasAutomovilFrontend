import { ComponentesModule } from './../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesorRoutingModule } from './asesor-routing.module';
import { SolicitudesComponent } from './estadisticas/solicitudes/solicitudes.component';
import { CrearAsignacionComponent } from './Asignados/crear-asignacion/crear-asignacion.component';
import { ActualizarAsignacionComponent } from './Asignados/actualizar-asignacion/actualizar-asignacion.component';
import { ListarAsignacionComponent } from './Asignados/listar-asignacion/listar-asignacion.component';
import { EliminarAsignacionComponent } from './Asignados/eliminar-asignacion/eliminar-asignacion.component';
import { CrearEstudioSolicitudComponent } from './estudioSoulictud/crear-estudio-solicitud/crear-estudio-solicitud.component';
import { ActualizarEstudioSolicitudComponent } from './estudioSoulictud/actualizar-estudio-solicitud/actualizar-estudio-solicitud.component';
import { ListarEstudioSolicitudComponent } from './estudioSoulictud/listar-estudio-solicitud/listar-estudio-solicitud.component';
import { EliminarEstudioSolicitudComponent } from './estudioSoulictud/eliminar-estudio-solicitud/eliminar-estudio-solicitud.component';
import { MensajesModule } from '../mensajes/mensajes.module';



@NgModule({
  declarations: [
    SolicitudesComponent,
    CrearAsignacionComponent,
    ActualizarAsignacionComponent,
    ListarAsignacionComponent,
    EliminarAsignacionComponent,
    CrearEstudioSolicitudComponent,
    ActualizarEstudioSolicitudComponent,
    ListarEstudioSolicitudComponent,
    EliminarEstudioSolicitudComponent,
    
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule,
    MensajesModule,
    ComponentesModule
  ]
})
export class AsesorModule { }
