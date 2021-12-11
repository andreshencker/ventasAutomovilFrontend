import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloMarcaTipoVehiculo } from 'src/app/modelos/marcaTipoVehiculo.model';
import { SeguridadService } from '../seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MarcaTipoVehiculoService {

  url="http://localhost:3000";
  token: string='';
  seleccionarMarcaTipoVehiculo:ModeloMarcaTipoVehiculo=new ModeloMarcaTipoVehiculo();
  constructor(private http:HttpClient,private seguridadServicio:SeguridadService) {
    this.token=seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros():Observable<ModeloMarcaTipoVehiculo[]>{
    return this.http.get<ModeloMarcaTipoVehiculo[]>(`${this.url}/marca-tipo-vehiculos`);
  }


  ObtenerMarcaTipoVehiculo(id:string):Observable<ModeloMarcaTipoVehiculo>{
    return this.http.get<ModeloMarcaTipoVehiculo>(`${this.url}/marca-tipo-vehiculos/${id}`);
  }
  ObtenerMarcaTipoVehiculoByMarca(id:string):Observable<ModeloMarcaTipoVehiculo[]>{
    return this.http.get<ModeloMarcaTipoVehiculo[]>(`${this.url}/marcas/${id}marca-tipo-vehiculos?filter={"include":[{"relation":"tipoVehiculo"}],"order":["tipoVehiculo ASC"]}`);
  }


  CrearMarcaTipoVehiculo(p:ModeloMarcaTipoVehiculo):Observable<ModeloMarcaTipoVehiculo>{
    return this.http.post<ModeloMarcaTipoVehiculo>(`${this.url}/marca-tipo-vehiculos`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarMarcaTipoVehiculo(p:ModeloMarcaTipoVehiculo):Observable<ModeloMarcaTipoVehiculo>{
    return this.http.put<ModeloMarcaTipoVehiculo>(`${this.url}/marca-tipo-vehiculos/${p.id}`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararMarcaTipoVehiculo(id:string):Observable<any>{
    return this.http.delete(`${this.url}/marca-tipo-vehiculos/${id}`,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
}
