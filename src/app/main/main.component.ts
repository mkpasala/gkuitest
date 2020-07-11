import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mainComponentList = [{
    "name":"Hierarchy",
    "routerName":"hierarchy",
    "id":1
  },
  {
    "name":"Customer",
    "routerName":"customer",
    "id":2
  },
  {
    "name":"Orders",
    "routerName":"orders",
    "id":3
  },
  {
    "name":"Schedules",
    "routerName":"schedules",
    "id":4
  },
  {
    "name":"Messages",
    "routerName":"messages",
    "id":5
  },
  {
    "name":"Email",
    "routerName":"email",
    "id":6
  }]

  constructor(private loginService:LoginServiceService,private router:Router) { }
  loginInfo = {
    "username":"",
    "password":""
  }
  ngOnInit() {
    this.loginService.currentLoginInfo.subscribe( _loginInfo => this.loginInfo = _loginInfo);
  }

  userLogout(){
    this.router.navigate(['/login']);
  }

}
