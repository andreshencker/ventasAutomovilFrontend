import { EliminarMarcaComponent } from './marca/eliminar-marca/eliminar-marca.component';
import { ListarMarcaComponent } from './marca/listar-marca/listar-marca.component';
import { ActualizarMarcaComponent } from './marca/actualizar-marca/actualizar-marca.component';
import { CrearMarcaComponent } from './marca/crear-marca/crear-marca.component';
import { EliminarEstadoContratoComponent } from './estadoContrato/eliminar-estado-contrato/eliminar-estado-contrato.component';
import { ListarEstadoContratoComponent } from './estadoContrato/listar-estado-contrato/listar-estado-contrato.component';
import { ActualizarEstadoContratoComponent } from './estadoContrato/actualizar-estado-contrato/actualizar-estado-contrato.component';
import { CrearEstadoContratoComponent } from './estadoContrato/crear-estado-contrato/crear-estado-contrato.component';
import { ListarTipoTransaccionComponent } from './tipoTransaccion/listar-tipo-transaccion/listar-tipo-transaccion.component';
import { ActualizarTipoTransaccionComponent } from './tipoTransaccion/actualizar-tipo-transaccion/actualizar-tipo-transaccion.component';
import { CrearTipoTransaccionComponent } from './tipoTransaccion/crear-tipo-transaccion/crear-tipo-transaccion.component';
import { EliminarCargoEmpleadoComponent } from './cargoEmpleado/eliminar-cargo-empleado/eliminar-cargo-empleado.component';
import { ListarCargoEmpleadoComponent } from './cargoEmpleado/listar-cargo-empleado/listar-cargo-empleado.component';
import { ActualizarCargoEmpleadoComponent } from './cargoEmpleado/actualizar-cargo-empleado/actualizar-cargo-empleado.component';
import { CrearCargoEmpleadoComponent } from './cargoEmpleado/crear-cargo-empleado/crear-cargo-empleado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarSolicitudVehiculoComponent } from '../cliente/soulictudVehiculo/actualizar-solicitud-vehiculo/actualizar-solicitud-vehiculo.component';
import { ActualizarCiudadComponent } from './ciudades/actualizar-ciudad/actualizar-ciudad.component';
import { CrearCiudadComponent } from './ciudades/crear-ciudad/crear-ciudad.component';
import { EliminarCiudadComponent } from './ciudades/eliminar-ciudad/eliminar-ciudad.component';
import { ListarCiudadComponent } from './ciudades/listar-ciudad/listar-ciudad.component';
import { ActualizarDetalleVehiculoComponent } from './detalleVehiculo/actualizar-detalle-vehiculo/actualizar-detalle-vehiculo.component';
import { CrearDetalleVehiculoComponent } from './detalleVehiculo/crear-detalle-vehiculo/crear-detalle-vehiculo.component';
import { EliminarDetalleVehiculoComponent } from './detalleVehiculo/eliminar-detalle-vehiculo/eliminar-detalle-vehiculo.component';
import { ListarDetalleVehiculoComponent } from './detalleVehiculo/listar-detalle-vehiculo/listar-detalle-vehiculo.component';
import { ActualizarEmpleadoComponent } from './empleado/actualizar-empleado/actualizar-empleado.component';
import { CrearEmpleadoComponent } from './empleado/crear-empleado/crear-empleado.component';
import { EliminarEmpleadoComponent } from './empleado/eliminar-empleado/eliminar-empleado.component';
import { ListarEmpleadoComponent } from './empleado/listar-empleado/listar-empleado.component';
import { VentasAsesorComponent } from './estadisticas/ventas-asesor/ventas-asesor.component';
import { ListarSolicitudVehiculoComponent } from './solicitudVehiculo/listar-solicitud-vehiculo/listar-solicitud-vehiculo.component';
import { ActualizarTipoVehiculoComponent } from './tipoVehiculo/actualizar-tipo-vehiculo/actualizar-tipo-vehiculo.component';
import { CrearTipoVehiculoComponent } from './tipoVehiculo/crear-tipo-vehiculo/crear-tipo-vehiculo.component';
import { EliminarTipoVehiculoComponent } from './tipoVehiculo/eliminar-tipo-vehiculo/eliminar-tipo-vehiculo.component';
import { ListarTipoVehiculoComponent } from './tipoVehiculo/listar-tipo-vehiculo/listar-tipo-vehiculo.component';
import { ActualizarVehiculoComponent } from './Vehiculo/actualizar-vehiculo/actualizar-vehiculo.component';
import { CrearVehiculoComponent } from './Vehiculo/crear-vehiculo/crear-vehiculo.component';
import { EliminarVehiculoComponent } from './Vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';
import { ListarVehiculoComponent } from './Vehiculo/listar-vehiculo/listar-vehiculo.component';
import { EliminarTipoTransaccionComponent } from './tipoTransaccion/eliminar-tipo-transaccion/eliminar-tipo-transaccion.component';
import { CrearEstadoSolicitudComponent } from './estadoSolicitud/crear-estado-solicitud/crear-estado-solicitud.component';
import { ActualizarEstadoSolicitudComponent } from './estadoSolicitud/actualizar-estado-solicitud/actualizar-estado-solicitud.component';
import { ListarEstadoSolicitudComponent } from './estadoSolicitud/listar-estado-solicitud/listar-estado-solicitud.component';
import { EliminarEstadoSolicitudComponent } from './estadoSolicitud/eliminar-estado-solicitud/eliminar-estado-solicitud.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';

const routes: Routes = [
  {
    path:'clientes',
    component:ClientesComponent
  },
  {
    path:'crear-ciudad',
    component:CrearCiudadComponent
  },
  {
    path:'actualizar-ciudad/:id',
    component:ActualizarCiudadComponent
  },
  {
    path:'listar-ciudad',
    component:ListarCiudadComponent
  },
  {
    path:'eliminar-ciudad/:id',
    component:EliminarCiudadComponent
  },
  {
    path:'crear-detalleVehiculo',
    component:CrearDetalleVehiculoComponent
  },
  {
    path:'actualizar-detalleVehiculo/:id',
    component:ActualizarDetalleVehiculoComponent
  },
  {
    path:'listar-detalleVehiculo',
    component:ListarDetalleVehiculoComponent
  },
  {
    path:'Eliminar-detalleVehiculo/:id',
    component:EliminarDetalleVehiculoComponent
  },
  {
    path:'crear-vehiculo/:id',
    component:CrearVehiculoComponent
  },
  {
    path:'catalogo-vehiculo/:id',
    component:ActualizarVehiculoComponent
  },
  {
    path:'foto-vehiculo/:id',
    component:ListarVehiculoComponent
  },
  {
    path:'Eliminar-vehiculo/:id',
    component:EliminarVehiculoComponent
  },
  {
    path:'crear-tipoVehiculo',
    component:CrearTipoVehiculoComponent
  },
  {
    path:'actualizar-tipoVehiculo/:id',
    component:ActualizarTipoVehiculoComponent
  },
  {
    path:'listar-tipoVehiculo',
    component:ListarTipoVehiculoComponent
  },
  {
    path:'eliminar-tipoVehiculo/:id',
    component:EliminarTipoVehiculoComponent
  },
  {
    path:'crear-tipoTransaccion',
    component:CrearTipoTransaccionComponent
  },
  {
    path:'actualizar-tipoTransaccion/:id',
    component:ActualizarTipoTransaccionComponent
  },
  {
    path:'listar-tipoTransaccion',
    component:ListarTipoTransaccionComponent
  },
  {
    path:'eliminar-tipoTransaccion/:id',
    component:EliminarTipoTransaccionComponent
  },
  {
    path:'crear-estadoContrato',
    component:CrearEstadoContratoComponent
  },
  {
    path:'actualizar-estadoContrato/:id',
    component:ActualizarEstadoContratoComponent
  },
  {
    path:'listar-estadoContrato',
    component:ListarEstadoContratoComponent
  },
  {
    path:'eliminar-estadoContrato/:id',
    component:EliminarEstadoContratoComponent
  },
  {
    path:'crear-estadoSolicitud',
    component:CrearEstadoSolicitudComponent
  },
  {
    path:'actualizar-estadoSolicitud/:id',
    component:ActualizarEstadoSolicitudComponent
  },
  {
    path:'listar-estadoSolicitud',
    component:ListarEstadoSolicitudComponent
  },
  {
    path:'eliminar-estadoSolicitud/:id',
    component:EliminarEstadoSolicitudComponent
  },
  {
    path:'crear-cargoEmpleado',
    component:CrearCargoEmpleadoComponent
  },
  {
    path:'actualizar-cargoEmpleado/:id',
    component:ActualizarCargoEmpleadoComponent
  },
  {
    path:'listar-cargoEmpleado',
    component:ListarCargoEmpleadoComponent
  },
  {
    path:'eliminar-cargoEmpleado/:id',
    component:EliminarCargoEmpleadoComponent,
  },
  {
    path:'crear-marca',
    component:CrearMarcaComponent
  },
  {
    path:'marcaTipoVehiculo/:id',
    component:ActualizarMarcaComponent
  },
  {
    path:'listar-marca',
    component:ListarMarcaComponent
  },
  {
    path:'eliminar-marca/:id',
    component:EliminarMarcaComponent,
  },
  {
    path:'crear-empleado',
    component:CrearEmpleadoComponent
  },
  {
    path:'actualizar-empleado/:id',
    component:ActualizarEmpleadoComponent
  },
  {
    path:'listar-empleado',
    component:ListarEmpleadoComponent
  },
  {
    path:'eliminar-empleado/:id',
    component:EliminarEmpleadoComponent,
  },
  {
    path:'listar-solicitudVehiculo',
    component:ListarSolicitudVehiculoComponent
  },
  {
    path:'actualizar-solicitudVehiculo/:id',
    component:ActualizarSolicitudVehiculoComponent,
  },
  {
    path:'estadisticas-ventas',
    component:VentasAsesorComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
