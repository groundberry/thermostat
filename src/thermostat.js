function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this.maxTemp = 25;
}

Thermostat.prototype.up = function () {
  if (this.temperature < this.maxTemp) {
    this.temperature += 1;
  }
};

Thermostat.prototype.down = function () {
  if (this.temperature > this.MIN_TEMPERATURE) {
    this.temperature -= 1;
  }
};

Thermostat.prototype.powerSavingMode = function (status) {
  if (status) {
    this.maxTemp = 25;
  }
  if (status === false) {
    this.maxTemp = 32;
  }
};
