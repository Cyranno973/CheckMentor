import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreUserService {
  private readonly user = new BehaviorSubject('');

  constructor() {
  }

  getUser() {
    return this.user.getValue();
  }

  setUser(name: string) {
    this.user.next(name);
  }
}
