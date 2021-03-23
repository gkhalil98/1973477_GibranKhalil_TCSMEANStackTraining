var itemInfo:Array<any>=[];

function retrieveFromSession() {
  var obj = sessionStorage.getItem(JSON.parse("items"));
}

function addItem1(data) {
  var table = document.getElementById("cart");
  var body = table.getelementsByTagName("tbody")[0];
  var newRow = body.insertRow(body.length);
  type Item {
    name: string;
    price: number;
  }

  const data = <Item>{};
  data.name = document.getElementById("nameLabel1").innerHTML;
  data.price = document.getElementById("priceLabel1").innerHTML;

  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.itemName;

  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.itemPrice;

  sessionStorage.setItem("items", JSON.stringify("data"));
}

function addItem2(data) {
  var table = document.getElementById("cart");
  var body = table.getelementsByTagName("tbody")[0];
  var newRow = body.insertRow(body.length);
  type Item {
    name: string;
    price: number;
  }

  const data = <Item>{};
  data.name = document.getElementById("nameLabel2").innerHTML;
  data.price = document.getElementById("priceLabel2").innerHTML;

  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.itemName;

  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.itemPrice;

  sessionStorage.setItem("items", JSON.stringify("data"));
}
function addItem3(data) {
  var table = document.getElementById("cart");
  var body = table.getelementsByTagName("tbody")[0];
  var newRow = body.insertRow(body.length);
  type Item {
    name: string;
    price: number;
  }

  const data = <Item>{};
  data.name = document.getElementById("nameLabel3").innerHTML;
  data.price = document.getElementById("priceLabel3").innerHTML;

  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.itemName;

  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.itemPrice;

  sessionStorage.setItem("items", JSON.stringify("data"));
}
function addItem4(data) {
  var table = document.getElementById("cart");
  var body = table.getelementsByTagName("tbody")[0];
  var newRow = body.insertRow(body.length);
  type Item {
    name: string;
    price: number;
  }

  const data = <Item>{};
  data.name = document.getElementById("nameLabel4").innerHTML;
  data.price = document.getElementById("priceLabel4").innerHTML;

  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.itemName;

  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.itemPrice;

  sessionStorage.setItem("items", JSON.stringify("data"));
}
