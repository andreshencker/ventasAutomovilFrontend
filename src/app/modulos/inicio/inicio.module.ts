import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { TarjetaComponent } from 'src/app/plantilla/tarjeta/tarjeta.component';
import { PiePaginaComponent } from './plantillas/pie-pagina/pie-pagina.component';
import { BarraNavegacionComponent } from './plantillas/barra-navegacion/barra-navegacion.component';


@NgModule({
  declarations: [
    InicioComponent,
    SobreNosotrosComponent,
    ContactanosComponent,
    PiePaginaComponent,
    BarraNavegacionComponent
    
    
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
    
  ]
})
export class InicioModule { }
