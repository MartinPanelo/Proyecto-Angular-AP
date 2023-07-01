import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { persona } from '../modelos/Modelo-personas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonaService {

  //URL = 'http://localhost:8080/api/';
  constructor(private http: HttpClient,@Inject('API_URL') public apiUrl: string) { }

  public getdato(): Observable<persona[]> {
    return this.http.get<persona[]>(this.apiUrl + 'personas');
  }
  public borrar(id:number): Observable<any> {
    return this.http.delete(this.apiUrl + `personas/${id}`);
  }
  public agregar(persona:persona): Observable<any> {
    return this.http.post(this.apiUrl + 'personas', persona);
  }
  public actualizar(persona:persona): Observable<any> {
    return this.http.put(this.apiUrl + `personas/${persona.id}`, persona);
  }
}
