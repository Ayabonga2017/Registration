var InpuRegElement = document.querySelector(".InputReg");
var AddbtnElement = document.querySelector(".Addbtn");
var RegNameDisplayElement = document.querySelector(".RegNameDisplay");
var Type_of_TownElem = document.querySelector(".Type_of_Town");


var RegistratinNumber = localStorage.getItem('Registrations')

var upperCase = document.getElementsByTagName('Input')[0]
upperCase.oninput = function() {
  upperCase.value = upperCase.value.toUpperCase();
}


var logic=RegistrationLogic();

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


  // if (InpuRegElement.value === "") {
  //
  //   return RegNameDisplayElement.innerHTML = "Please enter a Registration number";
  // }
  // //if (!TypeTown) {
  //   return RegNameDisplayElement.innerHTML = "Please select TownRadio";
  // }



  if (InpuRegElement.value === logic.regCheck() ) {

    return RegNameDisplayElement.innerHTML = "Please enter a correct Registration number";
  }
}

AddbtnElement.addEventListener('click', function() {
  Registration(newContent);



  var newContent = InpuRegElement.value
  RegNameDisplayElement.innerHTML = newContent;
  localStorage.setItem("Registrations", JSON.stringify(newContent));

});
