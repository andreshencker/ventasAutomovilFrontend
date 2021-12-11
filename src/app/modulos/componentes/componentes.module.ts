import { ScrollingModule } from '@angular/cdk/scrolling';
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
import {NgxPaginationModule} from 'ngx-pagination';
import { FormularioVehiculoComponent } from './form/formulario-vehiculo/formulario-vehiculo.component';
import { FormularioFotoVehiculoComponent } from './form/formulario-foto-vehiculo/formulario-foto-vehiculo.component';
import { TableFotoVehiculoComponent } from './table/table-foto-vehiculo/table-foto-vehiculo.component';
import { TrajetaFotoVehiculoComponent } from './card/trajeta-foto-vehiculo/trajeta-foto-vehiculo.component';
import { TarjetaCatalogoVehiculoComponent } from './card/tarjeta-catalogo-vehiculo/tarjeta-catalogo-vehiculo.component';
import { FormularioCatalogoVehiculoComponent } from './form/formulario-catalogo-vehiculo/formulario-catalogo-vehiculo.component';
import { FormularioAdmClientesComponent } from './form/formulario-adm-clientes/formulario-adm-clientes.component';
import { FormularioPerfilClienteComponent } from './form/formulario-perfil-cliente/formulario-perfil-cliente.component';
import { FormularioMarcaComponent } from './form/formulario-marca/formulario-marca.component';
import { FormularioMarcaTipoVehiculoComponent } from './form/formulario-marca-tipo-vehiculo/formulario-marca-tipo-vehiculo.component';


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
    TarjetaEmpleadoComponent,
    FormularioVehiculoComponent,
    FormularioFotoVehiculoComponent,
    TableFotoVehiculoComponent,
    TrajetaFotoVehiculoComponent,
    TarjetaCatalogoVehiculoComponent,
    FormularioCatalogoVehiculoComponent,
    FormularioAdmClientesComponent,
    FormularioPerfilClienteComponent,
    FormularioMarcaComponent,
    FormularioMarcaTipoVehiculoComponent



  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ScrollingModule


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
    TarjetaEmpleadoComponent,
    FormularioVehiculoComponent,
    FormularioFotoVehiculoComponent,
    TableFotoVehiculoComponent,
    FormularioCatalogoVehiculoComponent,
    FormularioAdmClientesComponent,
    FormularioPerfilClienteComponent,
    FormularioMarcaComponent,
    FormularioMarcaTipoVehiculoComponent



  ]
})
export class ComponentesModule { }
