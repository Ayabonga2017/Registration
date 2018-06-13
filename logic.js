function RegistrationLogic(storeRegNumbers) {

  var regNumberMap = storeRegNumbers || {};
  var regNumber = "";



  // remember the initialize regNumberMap from storeRegNumbers - to support localStorage vertical
  function addRegNumber(regNumber) {

    for (var i = 0; i < regNumber.length; i++) {

      if (regNumber[i].startsWith("CA ") || regNumber[i].startsWith("CK") || regNumber[i].startsWith("CY") || regNumber[i].startsWith("CAW") || regNumber[i].startsWith("")) {

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
    console.log(value);
    return searchdata;
  }

  //filter function for towns that startsWith('').....

  function townFilter(town){
    var cpt = [];
    var malmas = [];
    var bellv =[];
    var George= [];
    var All= [];

  if (town === "CA ") {

    for( var key in regNumberMap)
    {
      if (key.startsWith("CA ")) {
        cpt.push(key);
      }
    }
    return cpt;
    console.log(cpt);
  }

  if (town === "CK") {

    for( var key in regNumberMap)
    {
      if (key.startsWith("CK")) {
        malmas.push(key);
      }
    }
    return malmas;
  }

  if (town === "CY") {

    for( var key in regNumberMap)
    {
      if (key.startsWith("CY")) {
        bellv.push(key);
      }
    }
    return bellv;
  }

  if (town === "CAW") {

    for( var key in regNumberMap)
    {
      if (key.startsWith("CAW")) {
        George.push(key);
      }
    }
    return George;
  }


    if (town === "") {

      for( var key in regNumberMap)
      {
        if (key.startsWith("")) {
          All.push(key);
        }
      }
      return All;
    }
  }


  return {
    addRegNumber,
    myMap,
    filter,
    townFilter
  }
}
