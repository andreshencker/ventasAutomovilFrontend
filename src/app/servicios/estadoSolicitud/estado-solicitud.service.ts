import { ModeloEstadoSolicitud } from './../../modelos/estadoSolicitud.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SeguridadService } from '../seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoSolicitudService {

  url="http://localhost:3000";
  token: string='';
  constructor(private http:HttpClient,private seguridadServicio:SeguridadService) {
    this.token=seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros():Observable<ModeloEstadoSolicitud[]>{
    return this.http.get<ModeloEstadoSolicitud[]>(`${this.url}/estado-solicituds`);
  }

  ObtenerEstadoSolicitud(id:string):Observable<ModeloEstadoSolicitud>{
    return this.http.get<ModeloEstadoSolicitud>(`${this.url}/estado-solicituds/${id}`);
  }

  CrearEstadoSolicitud(p:ModeloEstadoSolicitud):Observable<ModeloEstadoSolicitud>{
    return this.http.post<ModeloEstadoSolicitud>(`${this.url}/estado-solicituds`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarEstadoSolicitud(p:ModeloEstadoSolicitud):Observable<ModeloEstadoSolicitud>{
    return this.http.put<ModeloEstadoSolicitud>(`${this.url}/estado-solicituds/${p.id}`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararEstadoEstadoSolicitud(id:string):Observable<any>{
    return this.http.delete(`${this.url}/estado-solicituds/${id}`,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
}
