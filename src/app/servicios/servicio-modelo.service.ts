import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modelo } from '../modelos/Modelo-modelo';

@Injectable({
  providedIn: 'root'
})
export class ServicioModeloService {

 /*  URL = 'http://localhost:8080/api/'; */
 constructor(private http: HttpClient,@Inject('API_URL') public apiUrl: string) { }

  public getdato(): Observable<modelo[]> {
    return this.http.get<modelo[]>(this.apiUrl + 'modelos');
  }
}