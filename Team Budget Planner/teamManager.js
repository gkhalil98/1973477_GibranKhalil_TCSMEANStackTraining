var budget = [];
/*var budget = {
  "managerName": this.managerName,
  "vendorName": this.vendorName,
  "funds": this.funds,
};*/

function submitData() {
  var data = readFormData();
  budget.push(data);
  localStorage.setItem("budgetInfo", budget);
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
