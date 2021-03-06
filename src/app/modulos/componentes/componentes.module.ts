import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraNavegacionInicioComponent } from './nav/barra-navegacion-inicio/barra-navegacion-inicio.component';
import { BarraNavegacionClienteComponent } from './nav/barra-navegacion-cliente/barra-navegacion-cliente.component';
import { BarraNavegacionAsesorComponent } from './nav/barra-navegacion-asesor/barra-navegacion-asesor.component';
import { BarraNavegacionAdministradorComponent } from './nav/barra-navegacion-administrador/barra-navegacion-administrador.component';
import { PiePaginaInicioComponent } from './footer/pie-pagina-inicio/pie-pagina-inicio.component';
import { LogoComponent } from './desing/logo/logo.component';
import { TarjetaVehiculoComponent } from './card/tarjeta-vehiculo/tarjeta-vehiculo.component';
import { CarouselVehiculoComponent } from './carousel/carousel-vehiculo/carousel-vehiculo.component';



@NgModule({
  declarations: [
    BarraNavegacionInicioComponent,
    BarraNavegacionClienteComponent,
    BarraNavegacionAsesorComponent,
    BarraNavegacionAdministradorComponent,
    PiePaginaInicioComponent,
    LogoComponent,
    TarjetaVehiculoComponent,
    CarouselVehiculoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BarraNavegacionInicioComponent,
    BarraNavegacionClienteComponent,
    BarraNavegacionAsesorComponent,
    BarraNavegacionAdministradorComponent,
    PiePaginaInicioComponent,
    LogoComponent,
    TarjetaVehiculoComponent,
    CarouselVehiculoComponent
  ]
})
export class ComponentesModule { }
