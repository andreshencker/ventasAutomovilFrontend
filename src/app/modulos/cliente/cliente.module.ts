import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { CrearSolicitudVehiculoComponent } from './soulictudVehiculo/crear-solicitud-vehiculo/crear-solicitud-vehiculo.component';
import { ActualizarSolicitudVehiculoComponent } from './soulictudVehiculo/actualizar-solicitud-vehiculo/actualizar-solicitud-vehiculo.component';
import { ListarSolicitudVehiculoComponent } from './soulictudVehiculo/listar-solicitud-vehiculo/listar-solicitud-vehiculo.component';
import { EliminarSolicitudVehiculoComponent } from './soulictudVehiculo/eliminar-solicitud-vehiculo/eliminar-solicitud-vehiculo.component';
import { BarraNavegacionComponent } from './plantillas/barra-navegacion/barra-navegacion.component';


@NgModule({
  declarations: [
    CrearSolicitudVehiculoComponent,
    ActualizarSolicitudVehiculoComponent,
    ListarSolicitudVehiculoComponent,
    EliminarSolicitudVehiculoComponent,
    BarraNavegacionComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
