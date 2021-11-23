import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { SeguridadService } from '../../seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  url="http://localhost:3000";
  token: string='';
  constructor(private http:HttpClient,private seguridadServicio:SeguridadService) {
    this.token=seguridadServicio.ObtenerToken();
  }
  ObtenerRegistros():Observable<ModeloVehiculo[]>{
    return this.http.get<ModeloVehiculo[]>(`${this.url}/vehiculos`);
  }
 
  ObtenerTipoVehiculo(id:string):Observable<ModeloVehiculo>{
    return this.http.get<ModeloVehiculo>(`${this.url}/vehiculos/${id}`);
  }
  
  CrearTipoVehiculo(vehiculo:ModeloVehiculo):Observable<ModeloVehiculo>{
    return this.http.post<ModeloVehiculo>(`${this.url}/vehiculos`,vehiculo,{
      headers:new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarTipoVehiculo(vehiculo:ModeloVehiculo):Observable<ModeloVehiculo>{
    return this.http.put<ModeloVehiculo>(`${this.url}/vehiculos`,vehiculo,{
      headers:new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararTipoVehiculo(id:string):Observable<any>{
    return this.http.delete(`${this.url}/vehiculos/${id}`,{
      headers:new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    });
  }
}
