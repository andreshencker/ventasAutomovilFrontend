import { ModeloFotoVehiculo } from './../../modelos/fotoVehiculo.modelo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeguridadService } from '../seguridad.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotoVehiculoService {

  url="http://localhost:3000";
  token: string='';
  seleccionarFoto:ModeloFotoVehiculo =new ModeloFotoVehiculo();
  constructor(
    private http:HttpClient,private seguridadServicio:SeguridadService) {
    this.token=seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros():Observable<ModeloFotoVehiculo[]>{
    return this.http.get<ModeloFotoVehiculo[]>(`${this.url}/foto-vehiculos`);
  }

  ObtenerFotoVehiculo(id:string):Observable<ModeloFotoVehiculo>{
    return this.http.get<ModeloFotoVehiculo>(`${this.url}/foto-vehiculos/${id}`);
  }

  ObtenerFortoVehiculoByVehiculo(id:string):Observable<ModeloFotoVehiculo[]>{
    return this.http.get<ModeloFotoVehiculo[]>(`${this.url}/vehiculos/${id}/foto-vehiculos`);
  }

  CrearFotoVehiculo(tipoVehiculo:ModeloFotoVehiculo):Observable<ModeloFotoVehiculo>{
    return this.http.post<ModeloFotoVehiculo>(`${this.url}/foto-vehiculos`,tipoVehiculo,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarFotoVehiculo(tipoVehiculo:ModeloFotoVehiculo):Observable<ModeloFotoVehiculo>{
    return this.http.put<ModeloFotoVehiculo>(`${this.url}/foto-vehiculos/${tipoVehiculo.id}`,tipoVehiculo,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararFotoVehiculo(id:string):Observable<any>{
    return this.http.delete(`${this.url}/foto-vehiculos/${id}`,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
}
