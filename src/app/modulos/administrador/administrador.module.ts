import { ComponentesModule } from './../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { CrearEmpleadoComponent } from './empleado/crear-empleado/crear-empleado.component';
import { ActualizarEmpleadoComponent } from './empleado/actualizar-empleado/actualizar-empleado.component';
import { ListarEmpleadoComponent } from './empleado/listar-empleado/listar-empleado.component';
import { EliminarEmpleadoComponent } from './empleado/eliminar-empleado/eliminar-empleado.component';
import { CrearTipoVehiculoComponent } from './tipoVehiculo/crear-tipo-vehiculo/crear-tipo-vehiculo.component';
import { ActualizarTipoVehiculoComponent } from './tipoVehiculo/actualizar-tipo-vehiculo/actualizar-tipo-vehiculo.component';
import { ListarTipoVehiculoComponent } from './tipoVehiculo/listar-tipo-vehiculo/listar-tipo-vehiculo.component';
import { EliminarTipoVehiculoComponent } from './tipoVehiculo/eliminar-tipo-vehiculo/eliminar-tipo-vehiculo.component';
import { CrearVehiculoComponent } from './Vehiculo/crear-vehiculo/crear-vehiculo.component';
import { ActualizarVehiculoComponent } from './Vehiculo/actualizar-vehiculo/actualizar-vehiculo.component';
import { ListarVehiculoComponent } from './Vehiculo/listar-vehiculo/listar-vehiculo.component';
import { EliminarVehiculoComponent } from './Vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';
import { CrearCiudadComponent } from './ciudades/crear-ciudad/crear-ciudad.component';
import { ActualizarCiudadComponent } from './ciudades/actualizar-ciudad/actualizar-ciudad.component';
import { ListarCiudadComponent } from './ciudades/listar-ciudad/listar-ciudad.component';
import { EliminarCiudadComponent } from './ciudades/eliminar-ciudad/eliminar-ciudad.component';
import { ListarSolicitudVehiculoComponent } from './solicitudVehiculo/listar-solicitud-vehiculo/listar-solicitud-vehiculo.component';
import { CrearDetalleVehiculoComponent } from './detalleVehiculo/crear-detalle-vehiculo/crear-detalle-vehiculo.component';
import { ActualizarDetalleVehiculoComponent } from './detalleVehiculo/actualizar-detalle-vehiculo/actualizar-detalle-vehiculo.component';
import { ListarDetalleVehiculoComponent } from './detalleVehiculo/listar-detalle-vehiculo/listar-detalle-vehiculo.component';
import { EliminarDetalleVehiculoComponent } from './detalleVehiculo/eliminar-detalle-vehiculo/eliminar-detalle-vehiculo.component';
import { VentasAsesorComponent } from './estadisticas/ventas-asesor/ventas-asesor.component';
import { MensajesModule } from '../mensajes/mensajes.module';



@NgModule({
  declarations: [
    CrearEmpleadoComponent,
    ActualizarEmpleadoComponent,
    ListarEmpleadoComponent,
    EliminarEmpleadoComponent,
    CrearTipoVehiculoComponent,
    ActualizarTipoVehiculoComponent,
    ListarTipoVehiculoComponent,
    EliminarTipoVehiculoComponent,
    CrearVehiculoComponent,
    ActualizarVehiculoComponent,
    ListarVehiculoComponent,
    EliminarVehiculoComponent,
    CrearCiudadComponent,
    ActualizarCiudadComponent,
    ListarCiudadComponent,
    EliminarCiudadComponent,
    ListarSolicitudVehiculoComponent,
    CrearDetalleVehiculoComponent,
    ActualizarDetalleVehiculoComponent,
    ListarDetalleVehiculoComponent,
    EliminarDetalleVehiculoComponent,
    VentasAsesorComponent,
 
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    MensajesModule,
    ComponentesModule
  ]
})
export class AdministradorModule { }
