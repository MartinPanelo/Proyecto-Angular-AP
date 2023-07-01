import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { colectivo } from '../modelos/Modelo-colectivos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioColectivoService {

 /*  URL = 'http://localhost:8080/api/'; */
 constructor(private http: HttpClient,@Inject('API_URL') public apiUrl: string) { }

  public getdato(): Observable<colectivo[]> {
    return this.http.get<colectivo[]>(this.apiUrl + 'colectivos');
  }
  public borrar(id:number): Observable<any> {
    return this.http.delete(this.apiUrl + `colectivos/${id}`);
  }
  public agregar(colectivo:colectivo): Observable<any> {
    return this.http.post(this.apiUrl + 'colectivos', colectivo);
  }
  public actualizar(colectivo:colectivo): Observable<any> {
    return this.http.put(this.apiUrl + `colectivos/${colectivo.id}`, colectivo);
  }
}
