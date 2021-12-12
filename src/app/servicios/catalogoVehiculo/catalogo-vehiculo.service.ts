import { ModeloCatalogoVehiculo } from './../../modelos/catalogoVehiculos.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeguridadService } from '../seguridad.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoVehiculoService {

  url="http://localhost:3000";
  token: string='';
  seleccionarCatalogo:ModeloCatalogoVehiculo= new ModeloCatalogoVehiculo()
  constructor(private http:HttpClient,private seguridadServicio:SeguridadService) {
    this.token=seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros():Observable<ModeloCatalogoVehiculo[]>{
    return this.http.get<ModeloCatalogoVehiculo[]>(`${this.url}/catalogo-vehiculos?filter={"order":["Catalogo ASC"]}`);
  }

  ObtenerCatalogoVehiculo(id:string):Observable<ModeloCatalogoVehiculo>{
    return this.http.get<ModeloCatalogoVehiculo>(`${this.url}/catalogo-vehiculos/${id}?filter={"include":[{"relation":"marcaTipoVehiculo"}]}`);
  }
  ObtenerCatalogoVehiculoByMarcaTipoVehiculo(id:string):Observable<ModeloCatalogoVehiculo[]>{
    return this.http.get<ModeloCatalogoVehiculo[]>(`${this.url}/marca-tipo-vehiculos/${id}/catalogo-vehiculos`);
  }

  CrearCatalogoVehiculo(p:ModeloCatalogoVehiculo):Observable<ModeloCatalogoVehiculo>{
    return this.http.post<ModeloCatalogoVehiculo>(`${this.url}/catalogo-vehiculos`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarCatalogoVehiculo(p:ModeloCatalogoVehiculo):Observable<ModeloCatalogoVehiculo>{
    return this.http.put<ModeloCatalogoVehiculo>(`${this.url}/catalogo-vehiculos/${p.id}`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararCatalogoVehiculo(id:string):Observable<any>{
    return this.http.delete(`${this.url}/catalogo-vehiculos/${id}`,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
}
