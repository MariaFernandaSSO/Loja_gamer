import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApilojaService {

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(cliente: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/cliente', cliente).pipe(
      map(retorno => retorno),
      catchError(erro => throwError(erro))
    )
  }
}
