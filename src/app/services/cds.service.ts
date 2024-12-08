import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CD } from '../models/cd.model';

@Injectable({
  providedIn: 'root'
})
export class CDsService {

  constructor(private http: HttpClient) {}

  getCDs(): Observable<CD[]> {
    return this.http.get<CD[]>('http://localhost:3000/CD/');
  }

  getCDById(id: number): Observable<CD> {
    return this.http.get<CD>('http://localhost:3000/CD/' + id);
  }

  addCD(cd: CD): Observable<void> {
    return this.http.post<void>('http://localhost:3000/CD/', cd);
  }

  updateCD(cd: CD): Observable<void> {
    return this.http.put<void>('http://localhost:3000/CD/' + cd.id, cd);
  }

  deleteCD(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:3000/CD/' + id);
  }
}