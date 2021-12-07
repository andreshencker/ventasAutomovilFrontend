import { ActualizarVehiculoComponent } from './../../modulos/administrador/Vehiculo/actualizar-vehiculo/actualizar-vehiculo.component';
import { ModeloVehiculo } from './../../modelos/vehiculo.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SeguridadService } from '../seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  url="http://localhost:3000";
  token: string='';
  seleccionarVehiculo:ModeloVehiculo=new ModeloVehiculo();
  constructor(private http:HttpClient,private seguridadServicio:SeguridadService) {
    this.token=seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros():Observable<ModeloVehiculo[]>{
    return this.http.get<ModeloVehiculo[]>(`${this.url}/vehiculos?filter={"include":[{"relation":"fotoVehiculos"},{"relation":"marca"},{"relation":"tipoTransaccion"},{"relation":"tipoVehiculo"},{"relation":"catalogoVehiculo"}]}`);
  }

  ObtenerVehiculo(id:string):Observable<ModeloVehiculo>{
    return this.http.get<ModeloVehiculo>(`${this.url}/vehiculos/${id}`);
  }

  CrearVehiculo(p:ModeloVehiculo):Observable<ModeloVehiculo>{
    return this.http.post<ModeloVehiculo>(`${this.url}/vehiculos`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarVehiculo(p:ModeloVehiculo):Observable<ModeloVehiculo>{
    return this.http.put<ModeloVehiculo>(`${this.url}/vehiculos/${p.id}`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararVehiculo(id:string):Observable<any>{
    return this.http.delete(`${this.url}/vehiculos/${id}`,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
}
