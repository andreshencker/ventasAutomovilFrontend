import { ModeloMarca } from './../../modelos/marca.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SeguridadService } from '../seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  url="http://localhost:3000";
  token: string='';
  constructor(private http:HttpClient,private seguridadServicio:SeguridadService) {
    this.token=seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros():Observable<ModeloMarca[]>{
    return this.http.get<ModeloMarca[]>(`${this.url}/marcas`);
  }

  ObtenerMarca(id:string):Observable<ModeloMarca>{
    return this.http.get<ModeloMarca>(`${this.url}/marcas/${id}`);
  }

  CrearMarca(p:ModeloMarca):Observable<ModeloMarca>{
    return this.http.post<ModeloMarca>(`${this.url}/marcas`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarMarca(p:ModeloMarca):Observable<ModeloMarca>{
    return this.http.put<ModeloMarca>(`${this.url}/marcas/${p.id}`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararMarca(id:string):Observable<any>{
    return this.http.delete(`${this.url}/marcas/${id}`,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
}
