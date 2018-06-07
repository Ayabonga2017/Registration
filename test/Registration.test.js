describe("Registration numbers from different Towns", function() {

  it("should return registrations that starts with CY", function() {

    var RegNumber = RegistrationLogic({
      "CY 234": 0,
      // "CA 245": 0,
      "CY 124": 0,
      // "CAW 2324": 0
    });

        // returns everything for CY...
        RegNumber.addRegNumber("CY");
        assert.deepEqual(RegNumber.myMap(), {"CY 124": 0, "CY 234": 0 });

  })
  })
  describe("Registration numbers from different Towns", function() {
  it("should return registration number that starts with CY only", function() {

    var RegNumber = RegistrationLogic({
      "CY 234": 0,
       "CA 245": 0,
      "CY 124": 0,
       "CAW 2324": 0
    });

        // returns everything for CY...
        RegNumber.addRegNumber("CY");
        let foundplates =  RegNumber.filter("CY");
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
        RegNumber.addRegNumber("CK");
        let foundplates =  RegNumber.filter("CK");
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
        RegNumber.addRegNumber("CA");
        let foundplates =  RegNumber.filter("CA");
        assert.deepEqual(foundplates, ["CA 245", "CAW 2324", "CA 124","CA 15854"]);

  })

});
