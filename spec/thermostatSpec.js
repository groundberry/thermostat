describe("Thermostat", function() {
  var thermostat;
});

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has a starting temperature of 20 °C", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("allows increase of temperature", function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });
