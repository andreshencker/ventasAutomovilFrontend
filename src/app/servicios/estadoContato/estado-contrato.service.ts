import { ModeloEstadoContrato } from './../../modelos/estadoContrato.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeguridadService } from '../seguridad.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoContratoService {

  url="http://localhost:3000";
  token: string='';
  constructor(private http:HttpClient,private seguridadServicio:SeguridadService) {
    this.token=seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros():Observable<ModeloEstadoContrato[]>{
    return this.http.get<ModeloEstadoContrato[]>(`${this.url}/estado-contratoes`);
  }

  ObtenerEstadoContrato(id:string):Observable<ModeloEstadoContrato>{
    return this.http.get<ModeloEstadoContrato>(`${this.url}/estado-contratoes/${id}`);
  }

  CrearEstadoContrato(p:ModeloEstadoContrato):Observable<ModeloEstadoContrato>{
    return this.http.post<ModeloEstadoContrato>(`${this.url}/estado-contratoes`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarEstadoContrato(p:ModeloEstadoContrato):Observable<ModeloEstadoContrato>{
    return this.http.put<ModeloEstadoContrato>(`${this.url}/estado-contratoes/${p.id}`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararEstadoContrato(id:string):Observable<any>{
    return this.http.delete(`${this.url}/estado-contratoes/${id}`,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
}
