describe("Registration numbers from different Towns", function() {

  it("should return Malmasbery CK", function() {

    var RegNumber = RegistrationLogic();

    RegNumber.WhichTown("CK");

    assert.equal("Malmasbery", RegNumber.WhichReg());

  })

  it("should return Bellville for CY", function() {

    var RegNumber = RegistrationLogic();

    RegNumber.WhichTown("CY");

    assert.equal("Bellville", RegNumber.WhichReg());

  })

  it("should return CapeTown for CA", function() {

    var RegNumber = RegistrationLogic();

    RegNumber.WhichTown("CA");

    assert.equal("CapeTown", RegNumber.WhichReg());

  })
});

describe("A failing test", function() {
  it("should not return CapeTown for CK", function() {

    var RegNumber = RegistrationLogic();

    RegNumber.WhichTown("CK");

    assert.equal("CapeTown", RegNumber.WhichReg());

  })
  })
