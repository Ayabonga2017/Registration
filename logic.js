function RegistrationLogic(storeRegNumbers) {

  var regNumberMap = storeRegNumbers || {};
  var registration = "";

  // remember the initialize regNumberMap from storeRegNumbers - to support localStorage vertical
  function addRegNumber(regNumber) {

    for (var i = 0; i < regNumber.length; i++) {

      if (regNumber[i].startsWith("CA ") || regNumber[i].startsWith("CK") || regNumber[i].startsWith("CY") || regNumber[i].startsWith("CAW")) {

        regNumberMap[regNumber] = 0;
      }
    }
    // return true if addded
    if (regNumberMap === regNumber) {

      return true;
    } else {
      // return false if already addded
      return false;
    }
  };

  // return all reg numbers already added
  function myMap() {

    return regNumberMap;
  }

  //Filter : filters out unwanted elements
  function filter(value) {
    var searchdata = [];
    var numberPlates = Object.keys(regNumberMap);
    if (value != '') {
      for (var i = 0; i < numberPlates.length; i++) {
        if (numberPlates[i].startsWith(value)) {

          searchdata.push(numberPlates[i]);
        }
      }
    }
    console.log(searchdata);
    return searchdata;
  }

  return {
    addRegNumber,
    myMap,
    filter
  }
}
