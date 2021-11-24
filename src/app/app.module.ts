import { ComponentesModule } from './modulos/componentes/componentes.module';
import { ClienteModule } from './modulos/cliente/cliente.module';
import { AdministradorModule } from './modulos/administrador/administrador.module';
import { InicioModule } from './modulos/inicio/inicio.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SeguridadModule } from './modulos/seguridad/seguridad.module';
import { MensajesModule } from './modulos/mensajes/mensajes.module';





@NgModule({
  declarations: [
    AppComponent,    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InicioModule,
    SeguridadModule,
    AdministradorModule,
    ClienteModule,
    MensajesModule,
    ComponentesModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
