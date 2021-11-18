import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarAsignacionComponent } from './Asignados/actualizar-asignacion/actualizar-asignacion.component';
import { ListarAsignacionComponent } from './Asignados/listar-asignacion/listar-asignacion.component';
import { SolicitudesComponent } from './estadisticas/solicitudes/solicitudes.component';
import { ActualizarEstudioSolicitudComponent } from './estudioSoulictud/actualizar-estudio-solicitud/actualizar-estudio-solicitud.component';
import { CrearEstudioSolicitudComponent } from './estudioSoulictud/crear-estudio-solicitud/crear-estudio-solicitud.component';
import { EliminarEstudioSolicitudComponent } from './estudioSoulictud/eliminar-estudio-solicitud/eliminar-estudio-solicitud.component';
import { ListarEstudioSolicitudComponent } from './estudioSoulictud/listar-estudio-solicitud/listar-estudio-solicitud.component';

const routes: Routes = [
   {
    path:'estadisticas-solicitudes',
    component:SolicitudesComponent
  },
  {
    path:'actualizar-asignacion',
    component:ActualizarAsignacionComponent
  },
   {
    path:'listar-asignacion',
    component:ListarAsignacionComponent
  },
  {
    path:'crear-estudioSolicitud',
    component:CrearEstudioSolicitudComponent
  },
  {
    path:'actualizar-estudioSolicitud',
    component:ActualizarEstudioSolicitudComponent
  },
  {
    path:'listar-estudioSolicitud',
    component:ListarEstudioSolicitudComponent
  },
  {
    path:'Eliminar-estudioSolicitud',
    component:EliminarEstudioSolicitudComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
