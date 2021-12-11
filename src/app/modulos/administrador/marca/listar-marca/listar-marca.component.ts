
import { Component, OnInit } from '@angular/core';
import { ModeloMarca } from 'src/app/modelos/marca.modelo';
import { MarcaService } from 'src/app/servicios/marca/marca.service';



@Component({
  selector: 'app-listar-marca',
  templateUrl: './listar-marca.component.html',
  styleUrls: ['./listar-marca.component.css']
})
export class ListarMarcaComponent implements OnInit {

  listadoMarca:ModeloMarca[]=[];
  constructor(
    public servicoMarca:MarcaService,
  ) {
    this.ObtenerListadoMarca();
   }

  ngOnInit(): void {
  }

  ObtenerListadoMarca(){
    this.servicoMarca.ObtenerRegistros().subscribe((datos:ModeloMarca[])=>{
      this.listadoMarca=datos;
    })
  }

}
