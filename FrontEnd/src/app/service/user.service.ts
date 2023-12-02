import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../core/model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get<Observable<any>>('http://localhost:3000/api/user');
  }

  signup(user: User): Observable<any> {
    return this.http.post<Observable<any>>('http://localhost:3000/api/auth/signup', user);
  }

  login(user: User): Observable<any> {
    return this.http.post<Observable<any>>('http://localhost:3000/api/auth/login', user);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get<Observable<any>>(`http://localhost:3000/api/user/${id}`);
  }

  getUserByMail(email: string): Observable<any> {
    return this.http.post<Observable<any>>(`http://localhost:3000/api/user/mail`, {mail: email});
  }
}
