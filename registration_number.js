var InpuRegElement = document.querySelector(".InputReg");
var AddbtnElement = document.querySelector(".Addbtn");
var RegNameDisplayElement = document.querySelector(".RegNameDisplay");
var Type_of_TownElem = document.querySelector(".Type_of_Town");


var NameStorage = localStorage.getItem('Names') ? JSON.parse(localStorage.getItem('Names')) : {};

function Registration() {

  var person = InpuRegElement.value
  RegNameDisplayElement.innerHTML = person;
  var TextNode = document.createTextNode(person);
  var list = document.createElement("LI");
  list.appendChild(TextNode);
  document.getElementById("regN");
  localStorage.setItem("Names", JSON.stringify(person));

  if (person === "") {

    return RegNameDisplayElement.innerHTML = "Please enter a Registration Number";

  }
}

AddbtnElement.addEventListener('click', function() {
  Registration();

});
