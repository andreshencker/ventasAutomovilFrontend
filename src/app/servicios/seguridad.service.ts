import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloidentificarCliente } from '../modelos/identificarCliente.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = "http://localhost:3000";
  constructor(private http:HttpClient) {  
    
  }

  Identificar(usuario :string, clave :string):Observable<ModeloidentificarCliente>{
    return this.http.post<ModeloidentificarCliente>(`${this.url}/localhost:3000/identificarCliente`,{
      usuario:usuario,
      clave:clave
    },{
      headers: new HttpHeaders({

      })
    })
  }

      

}


