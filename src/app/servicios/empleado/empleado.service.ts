import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
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
  
  CrearEmpleado(empleado:ModeloEmpleado):Observable<ModeloEmpleado>{
    return this.http.post<ModeloEmpleado>(`${this.url}/empleados`,empleado,{
      headers:new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarEmpleado(empleado:ModeloEmpleado):Observable<ModeloEmpleado>{
    return this.http.put<ModeloEmpleado>(`${this.url}/empleados`,empleado,{
      headers:new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararEmpleado(id:string):Observable<any>{
    return this.http.delete(`${this.url}/tipo-vehiculos/${id}`,{
      headers:new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    });
  }
}
