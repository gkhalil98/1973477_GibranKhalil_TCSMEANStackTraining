// When someone enters all of the information into the fields we should be able to update that blog into a thumbnail div
// We also want to store all information in sessionStorage so that we can have the information serialized
// Consider resetting all information in the text fields on submit
// Consider usability when implementing functionality for buttons especially, use logic and don't cut cornersd

var articleObj =[];

function storeInSession() {
  sessionStorage.setItem("articleInfo", JSON.stringify(articleObj));
}

function retrieveFromSession() {
  var obj = sessionStorage.getItem("articleInfo");
  obj = JSON.parse(obj);
  console.log(obj);
}

function submitArticle() {
  var data = readFormData();
  insertNewArticle(data);
  articleObj.push(data);
  resetData();
}

function readFormData() {
  var article = {};
  article.title = document.getElementById("title").value;
  article.body = document.getElementById("articleBody").value;
  article.img = document.getElementById("img").value;
  console.log(article);
}

function insertNewArticle(data) {
  var articleDiv = document.createElement("div");
  articleDiv.innerHTML = "<h2 class='header' id='articleTitle'></h2> <p id='articleBody'></p> <img id='articleImg' width='100%' height='100%'></img>";
  document.getElementById("articleTitle").value = article.title;
  document.getElementById("articleBody").value = article.body;
  document.getElementById("img").value = article.img;
  articleDiv.setAttribute('class', 'articleContainer');
  document.body.appendChild(articleDiv);
}

function resetData() {
  // set the value of all the text fields to null
  document.getElementById("title").value = "";
  document.getElementById("articleBody").value = "";
  document.getElementById("img").value = "";
}
