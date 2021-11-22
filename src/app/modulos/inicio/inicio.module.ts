import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { TarjetaComponent } from 'src/app/plantilla/tarjeta/tarjeta.component';


@NgModule({
  declarations: [
    InicioComponent,
    SobreNosotrosComponent,
    ContactanosComponent
    
    
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
    
  ]
})
export class InicioModule { }
