import { MensajesModule } from './modulos/mensajes/mensajes.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path:"inicio",
    loadChildren:()=> import("./modulos/inicio/inicio.module").then(x=>x.InicioModule)
  },
  {
    path:"",
    pathMatch:'full',
    redirectTo:'/inicio/inicio'   
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
    loadChildren:()=> import("./modulos/mensajes/mensajes.module").then(x=>x.MensajesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
