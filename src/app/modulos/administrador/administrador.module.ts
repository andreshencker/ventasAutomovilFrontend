import { FormularioEmpleadoComponent } from './../componentes/form/formulario-empleado/formulario-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CrearCargoEmpleadoComponent } from './cargoEmpleado/crear-cargo-empleado/crear-cargo-empleado.component';
import { ActualizarCargoEmpleadoComponent } from './cargoEmpleado/actualizar-cargo-empleado/actualizar-cargo-empleado.component';
import { ListarCargoEmpleadoComponent } from './cargoEmpleado/listar-cargo-empleado/listar-cargo-empleado.component';
import { EliminarCargoEmpleadoComponent } from './cargoEmpleado/eliminar-cargo-empleado/eliminar-cargo-empleado.component';
import { EliminarTipoTransaccionComponent } from './tipoTransaccion/eliminar-tipo-transaccion/eliminar-tipo-transaccion.component';
import { CrearTipoTransaccionComponent } from './tipoTransaccion/crear-tipo-transaccion/crear-tipo-transaccion.component';
import { ActualizarTipoTransaccionComponent } from './tipoTransaccion/actualizar-tipo-transaccion/actualizar-tipo-transaccion.component';
import { ListarTipoTransaccionComponent } from './tipoTransaccion/listar-tipo-transaccion/listar-tipo-transaccion.component';
import { ListarEstadoContratoComponent } from './estadoContrato/listar-estado-contrato/listar-estado-contrato.component';
import { CrearEstadoContratoComponent } from './estadoContrato/crear-estado-contrato/crear-estado-contrato.component';
import { ActualizarEstadoContratoComponent } from './estadoContrato/actualizar-estado-contrato/actualizar-estado-contrato.component';
import { EliminarEstadoContratoComponent } from './estadoContrato/eliminar-estado-contrato/eliminar-estado-contrato.component';
import { EliminarEstadoSolicitudComponent } from './estadoSolicitud/eliminar-estado-solicitud/eliminar-estado-solicitud.component';
import { ActualizarEstadoSolicitudComponent } from './estadoSolicitud/actualizar-estado-solicitud/actualizar-estado-solicitud.component';
import { CrearEstadoSolicitudComponent } from './estadoSolicitud/crear-estado-solicitud/crear-estado-solicitud.component';
import { ListarEstadoSolicitudComponent } from './estadoSolicitud/listar-estado-solicitud/listar-estado-solicitud.component';
import { CrearMarcaComponent } from './marca/crear-marca/crear-marca.component';
import { ActualizarMarcaComponent } from './marca/actualizar-marca/actualizar-marca.component';
import { ListarMarcaComponent } from './marca/listar-marca/listar-marca.component';
import { EliminarMarcaComponent } from './marca/eliminar-marca/eliminar-marca.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';



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
    CrearCargoEmpleadoComponent,
    ActualizarCargoEmpleadoComponent,
    ListarCargoEmpleadoComponent,
    EliminarCargoEmpleadoComponent,
    EliminarTipoTransaccionComponent,
    CrearTipoTransaccionComponent,
    ActualizarTipoTransaccionComponent,
    ListarTipoTransaccionComponent,
    ListarEstadoContratoComponent,
    CrearEstadoContratoComponent,
    ActualizarEstadoContratoComponent,
    EliminarEstadoContratoComponent,
    EliminarEstadoSolicitudComponent,
    ActualizarEstadoSolicitudComponent,
    CrearEstadoSolicitudComponent,
    ListarEstadoSolicitudComponent,
    CrearMarcaComponent,
    ActualizarMarcaComponent,
    ListarMarcaComponent,
    EliminarMarcaComponent,
    ClientesComponent,




  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    MensajesModule,
    ComponentesModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class AdministradorModule { }
