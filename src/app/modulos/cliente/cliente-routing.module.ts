import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarSolicitudVehiculoComponent } from '../administrador/solicitudVehiculo/listar-solicitud-vehiculo/listar-solicitud-vehiculo.component';
import { ActualizarSolicitudVehiculoComponent } from './soulictudVehiculo/actualizar-solicitud-vehiculo/actualizar-solicitud-vehiculo.component';
import { CrearSolicitudVehiculoComponent } from './soulictudVehiculo/crear-solicitud-vehiculo/crear-solicitud-vehiculo.component';
import { EliminarSolicitudVehiculoComponent } from './soulictudVehiculo/eliminar-solicitud-vehiculo/eliminar-solicitud-vehiculo.component';

const routes: Routes = [
  {
    path:'crear-solicitud',
    component:CrearSolicitudVehiculoComponent
  },
  {
    path:'actualizar-solicitud',
    component:ActualizarSolicitudVehiculoComponent
  },
  {
    path:'listar-solicitud',
    component:ListarSolicitudVehiculoComponent
  },
  {
    path:'eliminar-solicitud',
    component:EliminarSolicitudVehiculoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
