import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  logIn() {
    readFormData();
    sessionStorage.setItem(data, JSON.parse(tempUser.password));
    this.router.navigate(["portfolio"]);
  }
  readFormData:string() {
    var tempUser = function(obj:{username:string,password:string}) {
      tempUser.username=document.getElementById("username");
      tempUser.password=document.getElementById("password");
      data = JSON.stringify("tempUser");
      return data;
    }
  }

}
