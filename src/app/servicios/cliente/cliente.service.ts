import { ModeloContactoCliente } from './../../modelos/contactoCliente.modelo';
import { ModeloCliente } from './../../modelos/cliente.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeguridadService } from '../seguridad.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  seleccionarCliente:ModeloCliente= new ModeloCliente();
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

  ObtenerClienteCorreo(id:string):Observable<ModeloCliente>{
    return this.http.get<ModeloCliente>(`${this.url}/clientes?filter={"where":{"correo":"${id}"}}`);
  }

  CrearCliente(cliente:ModeloCliente):Observable<ModeloCliente>{
    return this.http.post<ModeloCliente>(`${this.url}/clientes`,cliente,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }
  recuperarContrasenaCliente(cliente:ModeloCliente):Observable<ModeloCliente>{
    return this.http.post<ModeloCliente>(`${this.url}/clientes/recuperarcontrasena`,cliente,{
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


  /*
  recuperarContrasenaCliente(cliente:ModeloCliente):Observable<ModeloCliente>{
    //let id = "61afe92bf062842b401203ec"
    return this.http.put<ModeloCliente>(`${this.url}/clientes/recuperarcontrasena/${cliente.id}`,cliente,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }*/



  EliminararCliente(id:string):Observable<any>{
    return this.http.delete(`${this.url}/clientes/${id}`,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }

  ContactoCliente(cliente:ModeloContactoCliente):Observable<ModeloContactoCliente>{
    return this.http.post<ModeloContactoCliente>(`${this.url}/clientes/contactenos`,cliente,{
      headers:new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    });
  }

}
