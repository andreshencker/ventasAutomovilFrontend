import { EstadoContratoService } from './../../../../servicios/estadoContato/estado-contrato.service';
import { ModeloEstadoContrato } from './../../../../modelos/estadoContrato.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-estado-contrato',
  templateUrl: './listar-estado-contrato.component.html',
  styleUrls: ['./listar-estado-contrato.component.css']
})
export class ListarEstadoContratoComponent implements OnInit {

  listadoRegistros:ModeloEstadoContrato[]=[];

  constructor(private estadoContratoServicio:EstadoContratoService) { }

  ngOnInit(): void {
    this.ObtenerListado()
  }

  ObtenerListado(){
    this. estadoContratoServicio.ObtenerRegistros().subscribe((datos:ModeloEstadoContrato[])=>{
      this.listadoRegistros=datos;
    })
  }
}
