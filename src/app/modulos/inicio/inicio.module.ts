import { MensajesModule } from './../mensajes/mensajes.module';
import { ComponentesModule } from './../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

@NgModule({
  declarations: [
    InicioComponent,
    SobreNosotrosComponent,
    ContactanosComponent,    
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    ComponentesModule,
    MensajesModule    
  ],
  exports:[
    
  ]
})
export class InicioModule { }
