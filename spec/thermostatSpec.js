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

  it("can't decrease temperature below 10 °C", function(){
    var i;
    for (i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toBeGreaterThan(9);
  });

  it("sets maximum temperature to 25 °C when powerSavingMode is on", function() {
    thermostat.powerSavingMode(true);
    expect(thermostat.maxTemp).toEqual(25);
  });

  it("sets maximum temperature to 35 °C when powerSavingMode is off", function() {
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

  it("can reset the temperature to 20 °C with a reset function", function() {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it("prints 'low-usage' when the temperature is below 18 °C", function() {
    thermostat.temperature = 17;
    expect(thermostat.energyUsage()).toEqual('low-usage');
  });

  it("prints 'medium-usage' when the temperature is below 25 °C", function() {
    thermostat.temperature = 24;
    expect(thermostat.energyUsage()).toEqual('medium-usage');
  });

  it("prints 'high-usage' when the temperature is above 25 °C", function() {
    thermostat.temperature = 26;
    expect(thermostat.energyUsage()).toEqual('high-usage');
  });
});
