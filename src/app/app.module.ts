import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearEmpleadoComponent } from './modulos/sadministracion/empleado/crear-empleado/crear-empleado.component';
import { CrearTipoVehiculoComponent } from './moludulos/administrador/tipoVehiculo/crear-tipo-vehiculo/crear-tipo-vehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearEmpleadoComponent,
    CrearTipoVehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
