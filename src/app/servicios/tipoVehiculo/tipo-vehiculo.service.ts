import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCiudad } from 'src/app/modelos/ciudad.modelo';
import { ModeloTipoVehiculo } from 'src/app/modelos/tipoVehiculo.modelo';
import { SeguridadService } from '../seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoService {


  url="http://localhost:3000";
  token: string='';
  constructor(private http:HttpClient,private seguridadServicio:SeguridadService) {
    this.token=seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros():Observable<ModeloTipoVehiculo[]>{
    return this.http.get<ModeloTipoVehiculo[]>(`${this.url}/tipo-vehiculos`);
  }

  ObtenerTipoVehiculo(id:string):Observable<ModeloTipoVehiculo>{
    return this.http.get<ModeloTipoVehiculo>(`${this.url}/tipo-vehiculos/${id}`);
  }

  CrearTipoVehiculo(tipoVehiculo:ModeloTipoVehiculo):Observable<ModeloTipoVehiculo>{
    return this.http.post<ModeloTipoVehiculo>(`${this.url}/tipo-vehiculos`,tipoVehiculo,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarTipoVehiculo(tipoVehiculo:ModeloTipoVehiculo):Observable<ModeloTipoVehiculo>{
    return this.http.put<ModeloTipoVehiculo>(`${this.url}/tipo-vehiculos/${tipoVehiculo.id}`,tipoVehiculo,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararTipoVehiculo(id:string):Observable<any>{
    return this.http.delete(`${this.url}/tipo-vehiculos/${id}`,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
}