import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addContact() {
    let data = readFormData();
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
  readFormData:string() {
    var contact = function(obj:{name:string,number:string}) {
      tempUser.name=document.getElementById("contactName");
      tempUser.number=document.getElementById("number");
      data = JSON.stringify("contact");
      return data;
    }
  }

}
