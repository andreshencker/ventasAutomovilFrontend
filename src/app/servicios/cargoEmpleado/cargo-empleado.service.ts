import { ModeloCargoEmpleado } from './../../modelos/cargoEmpleado.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeguridadService } from '../seguridad.service';
import { Observable } from 'rxjs';
import { Url } from 'src/app/utils/conxion';

@Injectable({
  providedIn: 'root'
})
export class CargoEmpleadoService {

  url="http://localhost:3000";
  token: string='';
  constructor(private http:HttpClient,private seguridadServicio:SeguridadService) {
    this.token=seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros():Observable<ModeloCargoEmpleado[]>{
    return this.http.get<ModeloCargoEmpleado[]>(`${this.url}/cargo-empleados`);
  }

  ObtenerCargoEmpleado(id:string):Observable<ModeloCargoEmpleado>{
    return this.http.get<ModeloCargoEmpleado>(`${this.url}/cargo-empleados/${id}`);
  }

  CrearCargoEmpleado(p:ModeloCargoEmpleado):Observable<ModeloCargoEmpleado>{
    return this.http.post<ModeloCargoEmpleado>(`${this.url}/cargo-empleados`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarCargoEmpleado(p:ModeloCargoEmpleado):Observable<ModeloCargoEmpleado>{
    return this.http.put<ModeloCargoEmpleado>(`${this.url}/cargo-empleados/${p.id}`,p,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararCargoEmpleado(id:string):Observable<any>{
    return this.http.delete(`${this.url}/cargo-empleados/${id}`,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }


}
