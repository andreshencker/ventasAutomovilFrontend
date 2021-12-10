import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloCliente } from '../modelos/cliente.modelo';
import { ModeloidentificarCliente } from '../modelos/identificarCliente.modelo';
import { ModeloidentificarEmpleado } from '../modelos/identificarEmpleado.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = "http://localhost:3000";
  datosUsuarioEnSesionCliente = new BehaviorSubject<ModeloidentificarCliente>(new ModeloidentificarCliente());
  datosUsuarioEnSesionEmpleado = new BehaviorSubject<ModeloidentificarEmpleado>(new ModeloidentificarEmpleado());

  constructor(private http:HttpClient) {
    this.VerificarSesionActualCliente();

  }

  VerificarSesionActualCliente(){
    let datos=this.ObtenerInformacionSesionCliente();
    if(datos){
     this.datosUsuarioEnSesionCliente.next(datos);
    }
  }
  VerificarSesionActualEmpleado(){
    let datos=this.ObtenerInformacionSesionEmpleado();
    if(datos){
     this.datosUsuarioEnSesionEmpleado.next(datos);
    }
  }

  RefrescarDatosSesionCliente(datos:ModeloidentificarCliente){
    this.datosUsuarioEnSesionCliente.next(datos);
  }
  RefrescarDatosSesionEmpledo(datos:ModeloidentificarEmpleado){
    this.datosUsuarioEnSesionEmpleado.next(datos);
  }

  ObtenerDatosUsuarioEnSesionCliente(){
    return this.datosUsuarioEnSesionCliente.asObservable();

  }
  ObtenerDatosUsuarioEnSesionEmpleado(){
    return this.datosUsuarioEnSesionEmpleado.asObservable();

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
  IdentificarEmpleado(usuario :string, clave :string):Observable<ModeloidentificarEmpleado>{
    return this.http.post<ModeloidentificarEmpleado>(`${this.url}/identificarEmpleado`,{
      usuario:usuario,
      clave:clave
    },{
      headers: new HttpHeaders({

      })
    })
  }



  AlmacenarSesionCliente(datos:ModeloidentificarCliente){
    datos.estaIdentificado=true;
    let stringDatos=JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos);
    this.RefrescarDatosSesionCliente(datos);
  }
  AlmacenarSesionEmpelado(datos:ModeloidentificarEmpleado){
    datos.estaIdentificado=true;
    let stringDatos=JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos);
    this.RefrescarDatosSesionEmpledo(datos);
  }

  ObtenerInformacionSesionCliente(){
    let datosString=localStorage.getItem("datosSesion");
    if(datosString){
      let datos=JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
  }
  ObtenerInformacionSesionEmpleado(){
    let datosString=localStorage.getItem("datosSesion");
    if(datosString){
      let datos=JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
  }

  EliminarInformacionSesionCliente(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesionCliente(new ModeloidentificarCliente());

  }
  EliminarInformacionSesionEmpleado(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesionCliente(new ModeloidentificarEmpleado());

  }

  SeHaInciadoSesionCliente(){
    let datosString=localStorage.getItem("datosSesion");
    return datosString;
  }

  SeHaInciadoSesionEmpleado(){
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


