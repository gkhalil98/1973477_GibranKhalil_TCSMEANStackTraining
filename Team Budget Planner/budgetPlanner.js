
var budget = [];

/*var budget = {
  "managerName": this.managerName,
  "vendorName": this.vendorName,
  "funds": this.funds,
};*/

function submitData() {
  var data = readFormData();
  insertNewRecord(data);
  budget.push(data);
  function storeLocal() {
    dataString = JSON.stringify(data).localStorage.setItem("budgetInfo", budget);
  }
  clearData();
}

function readFormData() {
  var obj = {};
  obj.managerName = document.getElementById('managerName').value;
  obj.vendorName = document.getElementById('vendorName').value;
  obj.funds = document.getElementById('funds').value;
  console.log(obj);
}

function clearData() {
  document.getElementById('managerName').value = "";
  document.getElementById('vendorName').value = "";
  document.getElementById('funds').value = "";
}


function insertNewRecord(data) {
  function retrieveFromLocal() {
    var dataJson = JSON.parse(data).localStorage.getItem("budgetInfo");
  }
  var table = document.getElementById("budgetList");
  var body = table.getElementByTagName("tbody")[0];
  var newRow = body.insertRow(body.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = dataJson.managerName;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = dataJson.vendorName;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = dataJson.funds;
}
