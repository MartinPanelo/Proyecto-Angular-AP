import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { viaje } from '../modelos/Modelo-viaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioViajeService {

  /* URL = 'http://localhost:8080/api/'; */
  constructor(private http: HttpClient,@Inject('API_URL') public apiUrl: string) { }

  public getdato(): Observable<viaje[]> {
    return this.http.get<viaje[]>(this.apiUrl + 'viajes');
  }

  public agregar(viaje:viaje): Observable<any> {
    return this.http.post(this.apiUrl + 'viajes', viaje);
  }
  public actualizar(viaje:viaje): Observable<any> {
    return this.http.put(this.apiUrl + `viajes/${viaje.id}`, viaje);
  }
  public BuscarPorID(id:number): Observable<any> {
    return this.http.get(this.apiUrl + `viajes/${id}`);
  }
  public borrar(id:number): Observable<any> {
    return this.http.delete(this.apiUrl + `viajes/${id}`);
  }
}
