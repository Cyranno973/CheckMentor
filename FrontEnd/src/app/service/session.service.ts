import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  getHistoriques():Observable<any> {
    return this.http.get<Observable<any>>('http://localhost:3000/history')
  }
}
