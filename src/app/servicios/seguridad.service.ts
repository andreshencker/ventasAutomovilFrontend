import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http:HttpClient) { }

  Identificar(usuario :string, clave :string):Observable{

      

  }
}
