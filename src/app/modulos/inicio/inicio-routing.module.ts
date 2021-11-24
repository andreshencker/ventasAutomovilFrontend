import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactanosComponent } from './contactanos/contactanos.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'sobreNosotros',
    component:SobreNosotrosComponent
  },
  {
    path:'contactenos',
    component:ContactanosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
