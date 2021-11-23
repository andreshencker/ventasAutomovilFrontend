import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloDetalleVehiculo } from 'src/app/modelos/detalleVehiculo.modelo';
import { SeguridadService } from '../../seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class DetalleVehiculoService {
  url="http://localhost:3000";
  token: string='';
  constructor(private http:HttpClient,private seguridadServicio:SeguridadService) {
    this.token=seguridadServicio.ObtenerToken();
  }
  ObtenerRegistros():Observable<ModeloDetalleVehiculo[]>{
    return this.http.get<ModeloDetalleVehiculo[]>(`${this.url}/detalle-vehiculos`);
  }
 
  ObtenerTipoVehiculo(id:string):Observable<ModeloDetalleVehiculo>{
    return this.http.get<ModeloDetalleVehiculo>(`${this.url}/detalle-vehiculos/${id}`);
  }
  
  CrearTipoVehiculo(vehiculo:ModeloDetalleVehiculo):Observable<ModeloDetalleVehiculo>{
    return this.http.post<ModeloDetalleVehiculo>(`${this.url}/detalle-vehiculos`,vehiculo,{
      headers:new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarTipoVehiculo(vehiculo:ModeloDetalleVehiculo):Observable<ModeloDetalleVehiculo>{
    return this.http.put<ModeloDetalleVehiculo>(`${this.url}/detalle-vehiculos`,vehiculo,{
      headers:new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararTipoVehiculo(id:string):Observable<any>{
    return this.http.delete(`${this.url}/detalle-vehiculos/${id}`,{
      headers:new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    });
  }
}
