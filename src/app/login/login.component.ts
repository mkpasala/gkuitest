import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare var $: any;
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router:Router,private loginService:LoginServiceService) { }
  username: string;
  password: string
  ngOnInit() {
  }

  userLogin() {
   /* this.httpClient
    .post(`https://kem.greenkoncepts.com/ems/services/ResourceService/login? username=${this.username}&credential=${this.password}`, {observe: 'response'})
    .subscribe(resp => {
      //success route to main page else show error popup;
      this.loginService.setLoginInfo()
    }); */
  
    let getRandom = (Math.random()>0.5)? 1 : 0;
    if(getRandom ===1){
      let userInfo = {
        "username":this.username,
        "password":this.password
      }
      this.loginService.setLoginInfo(userInfo)
      this.router.navigate(['/main'])
    }else{
      $("#exampleModal").modal('show');
    }
    
  }

  userLogout(){
     /* this.httpClient
    .post(`https://kem.greenkoncepts.com/ems/services/ResourceService/login? username=${this.username}&credential=${this.password}`, {observe: 'response'})
    .subscribe(resp => {
      //success route to main page else show error popup
    }); */
  }


}
