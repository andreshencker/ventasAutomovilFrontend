import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch:'full',
    redirectTo:'/inicio'   
  },
  {
    path:"administrador",
    loadChildren:()=> import("./modulos/administrador/administrador.module").then(x=>x.AdministradorModule)
  },
  {
    path:"asesor",
    loadChildren:()=> import("./modulos/asesor/asesor.module").then(x=>x.AsesorModule)
  },
  {
    path:"inicio",
    loadChildren:()=> import("./modulos/inicio/inicio.module").then(x=>x.InicioModule)
  },
  {
    path:"cliente",
    loadChildren:()=> import("./modulos/cliente/cliente.module").then(x=>x.ClienteModule)
  },
  {
    path:"seguridad",
    loadChildren:()=> import("./modulos/seguridad/seguridad.module").then(x=>x.SeguridadModule)
  },
  {
    path:"**",
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
