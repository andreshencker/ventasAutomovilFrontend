import { ClienteModule } from './modulos/cliente/cliente.module';
import { AdministradorModule } from './modulos/administrador/administrador.module';
import { InicioModule } from './modulos/inicio/inicio.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionInicioComponent } from './plantilla/barra-navegacion-inicio/barra-navegacion-inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { TarjetaComponent } from './plantilla/tarjeta/tarjeta.component';
import { HttpClientModule} from '@angular/common/http';
import { SeguridadModule } from './modulos/seguridad/seguridad.module';




@NgModule({
  declarations: [
    AppComponent,   
    BarraNavegacionInicioComponent,   
    ErrorComponent,
    TarjetaComponent,
      
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InicioModule,
    SeguridadModule,
    AdministradorModule,
    ClienteModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
