import { ModeloMarca } from './../../../../modelos/marca.modelo';
import { MarcaService } from './../../../../servicios/marca/marca.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMarcaTipoVehiculo } from 'src/app/modelos/marcaTipoVehiculo.model';
import { MarcaTipoVehiculoService } from 'src/app/servicios/marcaTipoVehiculo/marca-tipo-vehiculo.service';

@Component({
  selector: 'app-actualizar-marca',
  templateUrl: './actualizar-marca.component.html',
  styleUrls: ['./actualizar-marca.component.css']
})
export class ActualizarMarcaComponent implements OnInit {
  listadoMarcaTipoVehiculo:ModeloMarcaTipoVehiculo[]=[];
  id:string='';

  constructor(
    public servicio:MarcaTipoVehiculoService,
    private route:ActivatedRoute
  ){
    this.id=this.route.snapshot.params["id"];
    this.obtenerRegistrosMarca();
  }

  ngOnInit(): void {

  }

  obtenerRegistrosMarca(){
    this.servicio.ObtenerMarcaTipoVehiculoByMarca(this.id).subscribe((datos:ModeloMarcaTipoVehiculo[])=>{
      this.listadoMarcaTipoVehiculo=datos;
    })
  }



}
