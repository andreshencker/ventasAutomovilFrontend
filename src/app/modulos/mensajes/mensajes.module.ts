import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoEncontradoComponent } from './error/no-encontrado/no-encontrado.component';



@NgModule({
  declarations: [
    NoEncontradoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NoEncontradoComponent
  ]
})
export class MensajesModule { }
