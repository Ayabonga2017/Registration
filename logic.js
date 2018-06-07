function RegistrationLogic() {

  var registration = "";
 var regCode = ("CA" , "CY", "CA");
 var = RegistrationReturns= "";

  function WhichTown(registration) {


    if (registration === "CK") {

      RegistrationReturns = "Malmasbery";

    }
    if (registration === "CY") {

      RegistrationReturns = "Bellville";

    }
    if (registration === "CA") {

      RegistrationReturns = "CapeTown";

    }

  }
  function regCheck(){


  var results=registration.startsWith(regCode);
  return results;
};



  function WhichReg() {

    return RegistrationReturns;
  }


  return {

    WhichTown,
    WhichReg,
    regCheck
  }
}
