var InpuRegElement = document.querySelector(".InputReg");
var AddbtnElement = document.querySelector(".Addbtn");
var RegNameDisplayElement = document.querySelector(".RegNameDisplay");
var Type_of_TownElem = document.querySelector(".Type_of_Town");


var NameStorage = localStorage.getItem('Names') ? JSON.parse(localStorage.getItem('Names')) : {};
function Registration(NameStorage) {
  var CheckTown = document.querySelector("input[name='TownType']:checked");
  if (CheckTown) {
    var language = CheckTown.value;
  }
  var person = InpuRegElement.value;
  RegNameDisplayElement.innerHTML = person;
  localStorage.setItem("Names", JSON.stringify(person));

  var StoredReg = document.getElementById('regN').value ;
    document.body.append(StoredReg);

  if (person === "") {

    return RegNameDisplayElement.innerHTML = "Please enter a Registration Number";
  }
}

AddbtnElement.addEventListener('click', function() {
Registration();
});
