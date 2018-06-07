var InpuRegElement = document.querySelector(".InputReg");
var AddbtnElement = document.querySelector(".Addbtn");
var RegNameDisplayElement = document.querySelector(".RegNameDisplay");
var Type_of_TownElem = document.querySelector(".Type_of_Town");


var storeRegNumbers = localStorage.getItem('storeRegNumbers')

var upperCase = document.getElementsByTagName('Input')[0]
upperCase.oninput = function() {
  upperCase.value = upperCase.value.toUpperCase();
}

var logic=RegistrationLogic(storeRegNumbers);

function Registration () {

  var TypeTown = document.querySelector("input[name='TownType']:checked");
if (TypeTown) {
  var TownRadio = TypeTown.value;
}

  // create a new div element
 var newDiv = document.createElement("div");
   // and give it some content
var newContent = document.createTextNode(InpuRegElement.value);
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  //add the newly created element and its content into the DOM
  document.body.appendChild(newDiv);


    var newContent = InpuRegElement.value
    RegNameDisplayElement.innerHTML = newContent;
  localStorage.setItem("storeRegNumbers", JSON.stringify(newContent));
}

AddbtnElement.addEventListener('click', function() {
  Registration();




});
