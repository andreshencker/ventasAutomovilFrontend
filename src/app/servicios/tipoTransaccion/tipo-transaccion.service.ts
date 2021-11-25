import { ModeloTipoTransaccion } from './../../modelos/tipotransaccion.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeguridadService } from '../seguridad.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoTransaccionService {

  url="http://localhost:3000";
  token: string='';
  constructor(private http:HttpClient,private seguridadServicio:SeguridadService) {
    this.token=seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros():Observable<ModeloTipoTransaccion[]>{
    return this.http.get<ModeloTipoTransaccion[]>(`${this.url}/tipo-transaccions`);
  }

  ObtenerTipoTransaccion(id:string):Observable<ModeloTipoTransaccion>{
    return this.http.get<ModeloTipoTransaccion>(`${this.url}/tipo-transaccions/${id}`);
  }

  CrearTipoTransaccion(p:ModeloTipoTransaccion):Observable<ModeloTipoTransaccion>{
    return this.http.post<ModeloTipoTransaccion>(`${this.url}/tipo-transaccions`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarTipoTransaccion(p:ModeloTipoTransaccion):Observable<ModeloTipoTransaccion>{
    return this.http.put<ModeloTipoTransaccion>(`${this.url}/tipo-transaccions/${p.id}`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararTipoTransaccion(id:string):Observable<any>{
    return this.http.delete(`${this.url}/tipo-transaccions/${id}`,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
}
