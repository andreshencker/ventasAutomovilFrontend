import { EmpleadoService } from './../../servicios/empleado/empleado.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FormularioEmpleadoComponent } from './form/formulario-empleado/formulario-empleado.component';
import { TarjetaEmpleadoComponent } from './card/tarjeta-empleado/tarjeta-empleado.component';



@NgModule({
  declarations: [
    BarraNavegacionInicioComponent,
    BarraNavegacionClienteComponent,
    BarraNavegacionAsesorComponent,
    BarraNavegacionAdministradorComponent,
    PiePaginaInicioComponent,
    LogoComponent,
    TarjetaVehiculoComponent,
    CarouselVehiculoComponent,
    FormularioEmpleadoComponent,
    TarjetaEmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    BarraNavegacionInicioComponent,
    BarraNavegacionClienteComponent,
    BarraNavegacionAsesorComponent,
    BarraNavegacionAdministradorComponent,
    PiePaginaInicioComponent,
    LogoComponent,
    TarjetaVehiculoComponent,
    CarouselVehiculoComponent,
    FormularioEmpleadoComponent,
    TarjetaEmpleadoComponent
  ]
})
export class ComponentesModule { }
