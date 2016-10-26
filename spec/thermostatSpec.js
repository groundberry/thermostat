describe("Thermostat", function() {
  var thermostat;

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

  it("allows decrease of temperature", function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it("can't decrease temperature below 10 degrees", function(){
    var i;
    for (i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toBeGreaterThan(9);
  });

  it("sets maximum temperature to 25 when powerSavingMode is on", function() {
    thermostat.powerSavingMode(true);
    expect(thermostat.maxTemp).toEqual(25);
  });

  it("sets maximum temperature to 35 when powerSavingMode is off", function() {
    thermostat.powerSavingMode(false);
    expect(thermostat.maxTemp).toEqual(32);
  });

  it("can't increase temperature over maxTemp", function() {
    thermostat.powerSavingMode(true);
    var i;
    for (i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });
});
