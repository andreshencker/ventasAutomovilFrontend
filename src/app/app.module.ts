import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearEmpleadoComponent } from './modulos/sadministracion/empleado/crear-empleado/crear-empleado.component';
import { CrearTipoVehiculoComponent } from './moludulos/administrador/tipoVehiculo/crear-tipo-vehiculo/crear-tipo-vehiculo.component';
import { BarraNavegacionInicioComponent } from './plantilla/barra-navegacion-inicio/barra-navegacion-inicio.component';
import { BarraNavegacionClienteComponent } from './plantilla/barra-navegacion-cliente/barra-navegacion-cliente.component';
import { BarraNavegacionAsesorComponent } from './plantilla/barra-navegacion-asesor/barra-navegacion-asesor.component';
import { BarraNavegacionAdministradorComponent } from './plantilla/barra-navegacion-administrador/barra-navegacion-administrador.component';
import { FooterInicioComponent } from './plantilla/footer-inicio/footer-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearEmpleadoComponent,
    CrearTipoVehiculoComponent,
    BarraNavegacionInicioComponent,
    BarraNavegacionClienteComponent,
    BarraNavegacionAsesorComponent,
    BarraNavegacionAdministradorComponent,
    FooterInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
