describe("Thermostat", function() {
  var thermostat;
});

beforeEach(function() {
  thermostat = new Thermostat();
});

it("has a starting temperature of 20 °C", function() {
  expect(thermostat.temperature).toEqual(20);
});
