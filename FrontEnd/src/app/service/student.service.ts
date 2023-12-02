import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  getStudents():Observable<any> {
    return this.http.get<Observable<any>>('http://localhost:3000/api/students');
  }
  getStudentById(id: string):Observable<any> {
    return this.http.get<Observable<any>>(`http://localhost:3000/api/students/${id}`);
  }
}
