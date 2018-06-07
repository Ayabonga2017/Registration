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
        assert.equal(RegNumber.myMap(), {"CY 124": 0, "CY 234": 0 });

  })

});
