import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloidentificarCliente } from '../modelos/identificarCliente.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = "http://localhost:3000";
  datosUsuarioEnSesion = new BehaviorSubject<ModeloidentificarCliente>(new ModeloidentificarCliente());
  constructor(private http:HttpClient) {  
    this.VerificarSesionActual();
  }
  
  VerificarSesionActual(){
    let datos=this.ObtenerInformacionSesion();
    if(datos){
     this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos:ModeloidentificarCliente){
    this.datosUsuarioEnSesion.next(datos);
  }

  ObtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable();
   
  }

  Identificar(usuario :string, clave :string):Observable<ModeloidentificarCliente>{
    return this.http.post<ModeloidentificarCliente>(`${this.url}/identificarCliente`,{
      usuario:usuario,
      clave:clave
    },{
      headers: new HttpHeaders({

      })
    })
  }

  AlmacenarSesion(datos:ModeloidentificarCliente){
    datos.estaIdentificado=true;
    let stringDatos=JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion(){
    let datosString=localStorage.getItem("datosSesion");
    if(datosString){
      let datos=JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
  }

  EliminarInformacionSesion(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloidentificarCliente());

  }

  SeHaInciadoSesion(){
    let datosString=localStorage.getItem("datosSesion");
    return datosString;    
  }

  ObtenerToken(){
    let datosString=localStorage.getItem("datosSesion");
    if(datosString){
      let datos=JSON.parse(datosString);
      return datos.tk;
    }else{
      return '';
    }
  }    

}


