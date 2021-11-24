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

const routes: Routes = [
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
    path:'actualizar-detalleVehiculo',
    component:ActualizarDetalleVehiculoComponent
  },
  {
    path:'listar-detalleVehiculo',
    component:ListarDetalleVehiculoComponent
  },
  {
    path:'Eliminar-detalleVehiculo',
    component:EliminarDetalleVehiculoComponent
  },
  {
    path:'crear-Vehiculo',
    component:CrearVehiculoComponent
  },
  {
    path:'actualizar-Vehiculo',
    component:ActualizarVehiculoComponent
  },
  {
    path:'listar-Vehiculo',
    component:ListarVehiculoComponent
  },
  {
    path:'Eliminar-Vehiculo',
    component:EliminarVehiculoComponent
  },
  {
    path:'crear-tipoVehiculo',
    component:CrearTipoVehiculoComponent
  },
  {
    path:'actualizar-tipoVehiculo',
    component:ActualizarTipoVehiculoComponent
  },
  {
    path:'listar-tipoVehiculo',
    component:ListarTipoVehiculoComponent
  },
  {
    path:'Eliminar-tipoVehiculo',
    component:EliminarTipoVehiculoComponent
  },
  {
    path:'crear-empleado',
    component:CrearEmpleadoComponent
  },
  {
    path:'actualizar-empleado',
    component:ActualizarEmpleadoComponent
  },
  {
    path:'listar-empleado',
    component:ListarEmpleadoComponent
  },
  {
    path:'Eliminar-empleado',
    component:EliminarEmpleadoComponent,
  },
  {
    path:'listar-solicitudVehiculo',
    component:ListarSolicitudVehiculoComponent
  },
  {
    path:'actualizar-solicitudVehiculo',
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
