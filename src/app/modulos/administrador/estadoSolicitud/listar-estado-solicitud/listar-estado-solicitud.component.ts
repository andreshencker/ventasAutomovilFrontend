import { EstadoSolicitudService } from './../../../../servicios/estadoSolicitud/estado-solicitud.service';
import { EstadoContratoService } from './../../../../servicios/estadoContato/estado-contrato.service';
import { ModeloEstadoSolicitud } from './../../../../modelos/estadoSolicitud.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-estado-solicitud',
  templateUrl: './listar-estado-solicitud.component.html',
  styleUrls: ['./listar-estado-solicitud.component.css']
})
export class ListarEstadoSolicitudComponent implements OnInit {

  listadoRegistros:ModeloEstadoSolicitud[]=[];

  constructor(private estadoSolicitudServicio:EstadoSolicitudService) { }

  ngOnInit(): void {
    this.ObtenerListado()
  }

  ObtenerListado(){
    this. estadoSolicitudServicio.ObtenerRegistros().subscribe((datos:ModeloEstadoSolicitud[])=>{
      this.listadoRegistros=datos;
    })
  }
}
