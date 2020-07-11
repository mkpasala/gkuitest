import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private loginInfo = new BehaviorSubject<any>({"username":"","password":""});
  currentLoginInfo = this.loginInfo.asObservable();

  constructor(private router:Router) { }

  setLoginInfo(_loginInfo:any){
    this.loginInfo.next(_loginInfo);
  }

}
