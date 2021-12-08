import { ModeloCliente } from './../../modelos/cliente.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeguridadService } from '../seguridad.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url="http://localhost:3000";
  token: string='';
  constructor(private http:HttpClient,private seguridadServicio:SeguridadService) {
    this.token=seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros():Observable<ModeloCliente[]>{
    return this.http.get<ModeloCliente[]>(`${this.url}/clientes`);
  }

  ObtenerCliente(id:string):Observable<ModeloCliente>{
    return this.http.get<ModeloCliente>(`${this.url}/clientes/${id}`);
  }

  ObtenerClienteDocumentoAndCorreo(documento:string,correo:string):Observable<ModeloCliente>{
    return this.http.get<ModeloCliente>(`${this.url}/clientes?filter={"where":{"documento":${documento},"correo":${correo}}}`);
  }

  CrearCliente(cliente:ModeloCliente):Observable<ModeloCliente>{
    return this.http.post<ModeloCliente>(`${this.url}/clientes`,cliente,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  ActualizarCliente(cliente:ModeloCliente):Observable<ModeloCliente>{
    return this.http.put<ModeloCliente>(`${this.url}/clientes/${cliente.id}`,cliente,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  EliminararCliente(id:string):Observable<any>{
    return this.http.delete(`${this.url}/clientes/${id}`,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
}
