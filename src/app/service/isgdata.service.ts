import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { isgData } from './isgdata.model';

@Injectable({
  providedIn: 'root'
})
export class IsgdataService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/posts";

  getData(): Observable<isgData[]>{
    return this.http.get<isgData[]>(this.url);
  }
}
