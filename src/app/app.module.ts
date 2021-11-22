import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionInicioComponent } from './plantilla/barra-navegacion-inicio/barra-navegacion-inicio.component';
import { BarraNavegacionClienteComponent } from './plantilla/barra-navegacion-cliente/barra-navegacion-cliente.component';
import { BarraNavegacionAsesorComponent } from './plantilla/barra-navegacion-asesor/barra-navegacion-asesor.component';
import { BarraNavegacionAdministradorComponent } from './plantilla/barra-navegacion-administrador/barra-navegacion-administrador.component';
import { FooterInicioComponent } from './plantilla/footer-inicio/footer-inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { TarjetaComponent } from './plantilla/tarjeta/tarjeta.component';
import { HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,   
    BarraNavegacionInicioComponent,
    BarraNavegacionClienteComponent,
    BarraNavegacionAsesorComponent,
    BarraNavegacionAdministradorComponent,
    FooterInicioComponent,
    ErrorComponent,
    TarjetaComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
