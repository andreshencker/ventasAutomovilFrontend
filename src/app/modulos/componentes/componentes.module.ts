import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraNavegacionInicioComponent } from './barra-navegacion-inicio/barra-navegacion-inicio.component';
import { BarraNavegacionClienteComponent } from './nav/barra-navegacion-cliente/barra-navegacion-cliente.component';
import { BarraNavegacionAsesorComponent } from './nav/barra-navegacion-asesor/barra-navegacion-asesor.component';
import { BarraNavegacionAdministradorComponent } from './nav/barra-navegacion-administrador/barra-navegacion-administrador.component';
import { PiePaginaInicioComponent } from './footer/pie-pagina-inicio/pie-pagina-inicio.component';



@NgModule({
  declarations: [
    BarraNavegacionInicioComponent,
    BarraNavegacionClienteComponent,
    BarraNavegacionAsesorComponent,
    BarraNavegacionAdministradorComponent,
    PiePaginaInicioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
