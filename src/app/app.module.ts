import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionInicioComponent } from './plantilla/barra-navegacion-inicio/barra-navegacion-inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { TarjetaComponent } from './plantilla/tarjeta/tarjeta.component';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,   
    BarraNavegacionInicioComponent,   
    ErrorComponent,
    TarjetaComponent   
   
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
