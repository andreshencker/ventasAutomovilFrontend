import { TipoTransaccionService } from './../../../../servicios/tipoTransaccion/tipo-transaccion.service';
import { ModeloTipoTransaccion } from './../../../../modelos/tipotransaccion.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tipo-transaccion',
  templateUrl: './listar-tipo-transaccion.component.html',
  styleUrls: ['./listar-tipo-transaccion.component.css']
})
export class ListarTipoTransaccionComponent implements OnInit {

  listadoRegistros:ModeloTipoTransaccion[]=[];

  constructor(private servicio:TipoTransaccionService) { }

  ngOnInit(): void {
    this.ObtenerListado()
  }

  ObtenerListado(){
    this. servicio.ObtenerRegistros().subscribe((datos:ModeloTipoTransaccion[])=>{
      this.listadoRegistros=datos;
    })
  }

}
