var i = 0;
function increment() {
  sessionStorage.setItem("obj1", i+1);
  i++;
  displayData();
}

function displayData() {
  var obj = sessionStorage.getItem("obj1");
  document.getElementById("info").innerHTML = obj;
}
