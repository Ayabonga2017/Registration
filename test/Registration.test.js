
  describe("Registration numbers that are filtered from different Towns", function() {
  it("should return registration number that starts with CY only", function() {

    var RegNumber = RegistrationLogic({
      "CY 234": 0,
       "CA 245": 0,
      "CY 124": 0,
       "CAW 2324": 0
    });

        // returns everything for CY...
        //RegNumber.addRegNumber("CY");
        var  foundplates =  RegNumber.filter("CY");
        assert.deepEqual(foundplates, ["CY 234", "CY 124"]);

  })
  it("should return registration number that starts with CK only from the list", function() {

    var RegNumber = RegistrationLogic({
      "CY 234": 0,
       "CA 245": 0,
      "CK 18484": 0,
       "CAW 2324": 0,
       "CK 124": 0,
        "CAW 224": 0,
        "CK 15854" :0
    });

        // returns everything for CY...
        //RegNumber.addRegNumber("CK");
        var  foundplates =  RegNumber.filter("CK");
        assert.deepEqual(foundplates, ["CK 18484", "CK 124", "CK 15854"]);

  })
  it("should return registration number that starts with CA only from the list", function() {

    var RegNumber = RegistrationLogic({
      "CY 234": 0,
       "CA 245": 0,
      "CK 18484": 0,
       "CAW 2324": 0,
       "CA 124": 0,
        "CAW 224": 0,
        "CA 15854" :0
    });

        // returns everything for CY...
        //RegNumber.addRegNumber("CA ");
        var  foundplates =  RegNumber.filter("CA ");
        assert.deepEqual(foundplates, ["CA 245", "CA 124", "CA 15854"]);

  })

  it("should return registration number that starts with CAW only from the list", function() {

    var RegNumber = RegistrationLogic({
      "CY 234": 0,
       "CA 245": 0,
      "CK 18484": 0,
       "CAW 2324": 0,
       "CA 124": 0,
        "CAW 224": 0,
        "CAW 15854" :0,
        "CAW 5854" :0,
        "CAW 09854" :0
    });

        // returns everything for CY...
        //RegNumber.addRegNumber("CAW");
        var  foundplates =  RegNumber.filter("CAW");
        console.log(foundplates);
        assert.deepEqual(foundplates, ["CAW 2324", "CAW 224", "CAW 15854", "CAW 5854", "CAW 09854"]);

  })

  it("should return registration number that starts with All only from the list", function() {

    var RegNumber = RegistrationLogic({
      "CY 234": 0,
       "CA 245": 0,
      "CK 18484": 0,
       "CAW 2324": 0,
       "CA 124": 0,
        "CAW 224": 0,
        "CAW 15854" :0,
        "CAW 5854" :0,
        "CAW 09854" :0
    });

        // returns everything for CY...
        //RegNumber.addRegNumber("CAW");
        var  foundplates =  RegNumber.filter("CY", "CA", "CK", "CAW");
        console.log(foundplates);
        assert.deepEqual(foundplates, ["CY 234", "CA 245", "CK 18484", "CAW 2324", "CA 124", "CAW 224", "CAW 15854", "CAW 5854", "CAW 09854"]);

  })
});
