import { ModeloEmpleado } from './../../modelos/empleado.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SeguridadService } from '../seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url="http://localhost:3000";
  token: string='';
  constructor(private http:HttpClient,private seguridadServicio:SeguridadService) {
    this.token=seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros():Observable<ModeloEmpleado[]>{
    return this.http.get<ModeloEmpleado[]>(`${this.url}/empleados`);
  }

  ObtenerEmpleado(id:string):Observable<ModeloEmpleado>{
    return this.http.get<ModeloEmpleado>(`${this.url}/empleados/${id}`);
  }

  CrearEmpleado(p:ModeloEmpleado):Observable<ModeloEmpleado>{
    return this.http.post<ModeloEmpleado>(`${this.url}/empleados`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarEmpleado(p:ModeloEmpleado):Observable<ModeloEmpleado>{
    return this.http.put<ModeloEmpleado>(`${this.url}/empleados/${p.id}`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararEmpleado(id:string):Observable<any>{
    return this.http.delete(`${this.url}/empleados/${id}`,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
}
