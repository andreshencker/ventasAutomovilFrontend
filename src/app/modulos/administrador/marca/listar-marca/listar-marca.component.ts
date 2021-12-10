import { MarcaService } from './../../../../servicios/marca/marca.service';
import { ModeloMarca } from './../../../../modelos/marca.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-marca',
  templateUrl: './listar-marca.component.html',
  styleUrls: ['./listar-marca.component.css']
})
export class ListarMarcaComponent implements OnInit {

  listadoRegistros:ModeloMarca[]=[];

  constructor(private servicio:MarcaService) { }

  ngOnInit(): void {
    this.ObtenerListado();
  }

  ObtenerListado(){
    this. servicio.ObtenerRegistros().subscribe((datos:ModeloMarca[])=>{
      this.listadoRegistros=datos;
    })
  }

}
