var InpuRegElement = document.querySelector(".InputReg");
var AddbtnElement = document.querySelector(".Addbtn");
var RegNameDisplayElement = document.querySelector(".RegNameDisplay");
var Type_of_TownElem = document.querySelector(".Type_of_Town");


var RegistratinNumber = localStorage.getItem('Regs') ? JSON.parse(localStorage.getItem('Regs')) : {};

var upperCase = document.getElementsByTagName('Input')[0]
upperCase.oninput = function() {
  upperCase.value = upperCase.value.toUpperCase();
}
document.body.onload = Registration;

function Registration () {

  var currentDiv = document.getElementById("myUL");
  // create a new div element
 var newDiv = document.createElement("div");
   // and give it some content
var newContent = document.createTextNode(InpuRegElement.value);
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  //add the newly created element and its content into the DOM
  document.body.appendChild(newDiv);

  if (newContent === "") {

    return RegNameDisplayElement.innerHTML = "Please enter a Registration Number";
  }

}

AddbtnElement.addEventListener('click', function() {
  Registration(newContent);



  var newContent = InpuRegElement.value
  RegNameDisplayElement.innerHTML = newContent;
  localStorage['Regs'] = JSON.stringify(newContent);

});
