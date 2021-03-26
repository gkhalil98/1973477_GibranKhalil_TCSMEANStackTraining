import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public routerr:Router) { }

  ngOnInit(): void {
  }
  register() {
    let registrationData = readFormData();
    addContact(registrationData);
    sessionStorage.setItem("registrationData", JSON.parse(registartionData.tempUser.password));
    this.router.navigate(["login"]);
  }
  readFormData:string() {
    var tempUser = function(obj:{name:string,number:string,username:string,password:string}) {
      tempUser.name=document.getElementById("contactName");
      tempUser.number=document.getElementById("number");
      tempUser.username=document.getElementById("username");
      tempUser.password=document.getElementById("password");
      data = JSON.stringify("tempUser");
      return data;
    }
  }
  addContact(data) {
    data = JSON.parse("data");
    var table = document.getElementById("contacts");
    var body = table.getelementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);
    type Contact {
      name: string;
      number: string;
    }

    const tableData = <Item>{};
    data.name = document.getElementById("contactName").value;
    data.price = document.getElementById("number").value;

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.number;

    sessionStorage.setItem("contacts", JSON.stringify("data"));
  }

}
