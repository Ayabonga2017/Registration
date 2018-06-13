var InpuRegElement = document.querySelector(".InputReg");
var AddbtnElement = document.querySelector(".Addbtn");
var showbtnElem = document.querySelector(".showbtn");
var RegNameDisplayElement = document.querySelector(".RegNameDisplay");
var Type_of_TownElem = document.querySelector(".Type_of_Town");
var resetElembtn = document.querySelector(".resetbtn");

var storeRegNumbers = localStorage.getItem('RegsEnterd') ? JSON.parse(localStorage.getItem('RegsEnterd')) : {};
var storage = storeRegNumbers;

var logic = RegistrationLogic(storeRegNumbers);

window.addEventListener('load', function() {
 var  storeKeys =Object.keys(storage);
for (var i = 0; i < storeKeys.length; i++) {
  CreateElem(storeKeys[i]);
}
});

function CreateElem(regNumbers) {
  // create a new div element
  var newDiv = document.createElement("ul");
  // and give it some content
  newDiv.innerHTML = regNumbers;
  //add the newly created element and its content into the DOM
  RegNameDisplayElement.appendChild(newDiv);
}

function addingRegs() {
  var regEntered = InpuRegElement.value.toUpperCase();

  // var alphaNumeric = /^[a-zA-Z0-9]+$/;
  //
  // if (regEntered.match(alphaNumeric)&& regEntered !=="") {

  if (storage[regEntered] === undefined) {

    storage[regEntered] = 0;
  }

  CreateElem(regEntered);
  localStorage.setItem("RegsEnterd", JSON.stringify(storage));
  }
//}

AddbtnElement.addEventListener('click', function() {
  addingRegs();
});

//Filter function for which town does the reg number is from...........

function FilterBtn(){

  var checkedTownbtn = document.querySelector("input[name='TownType']:checked");
  if (checkedTownbtn){
    RegNameDisplayElement.innerHTML = '';
    // logic.addRegNumber()
    var town = checkedTownbtn.value;
    // create a new div element
    var listRegs = document.createElement("div");
    var filteredRegs = logic.townFilter(town);
    for (var i = 0; i < filteredRegs.length; i++){
      CreateElem(filteredRegs[i])
      // listRegs.innerHTML = filteredRegs[i];
      console.log(filteredRegs[i]);
    }
    //add the newly created element and its content into the DOM
    RegNameDisplayElement.appendChild(listRegs);
  }
}
showbtnElem.addEventListener('click', function() {
  FilterBtn();
});

resetElembtn.addEventListener('click', function() {
  localStorage.clear();
  location.reload();

});
