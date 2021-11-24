import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCiudad } from 'src/app/modelos/ciudad.modelo';
import { SeguridadService } from '../seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  url="http://localhost:3000";
  token: string='';
  constructor(private http:HttpClient,private seguridadServicio:SeguridadService) {
    this.token=seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros():Observable<ModeloCiudad[]>{
    return this.http.get<ModeloCiudad[]>(`${this.url}/ciudads`);
  }

  ObtenerCiudad(id:string):Observable<ModeloCiudad>{
    return this.http.get<ModeloCiudad>(`${this.url}/ciudads/${id}`);
  }

  CrearCiudad(ciudad:ModeloCiudad):Observable<ModeloCiudad>{
    return this.http.post<ModeloCiudad>(`${this.url}/ciudads`,ciudad,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarCiudad(ciudad:ModeloCiudad):Observable<ModeloCiudad>{
    return this.http.put<ModeloCiudad>(`${this.url}/ciudads/${ciudad.id}`,ciudad,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararCiudad(id:string):Observable<any>{
    return this.http.delete(`${this.url}/ciudads/${id}`,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
}
