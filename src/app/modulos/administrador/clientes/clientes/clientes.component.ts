import { Component, OnInit } from '@angular/core';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  listadoClientes:ModeloCliente[]=[];
  constructor(
    public servicioCliente:ClienteService
  ) {
    this.ObtenerListadoCliente();
  }

  ngOnInit(): void {
  }

  ObtenerListadoCliente(){
    this.servicioCliente.ObtenerRegistros().subscribe((datos:ModeloCliente[])=>{
      this.listadoClientes=datos;
    })

}

}
