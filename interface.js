$(document).ready(function() {
  thermostat = new Thermostat();
  document.getElementById('degrees').innerHTML=(thermostat.temperature);

  $('#temperature-up').click(function() {
    thermostat.up();
    document.getElementById('degrees').innerHTML=(thermostat.temperature);
  });
  document.getElementById('degrees').innerHTML=(thermostat.temperature);

  $('#temperature-down').click(function() {
    thermostat.down();
    document.getElementById('degrees').innerHTML=(thermostat.temperature);
  });
  document.getElementById('degrees').innerHTML=(thermostat.temperature);

  $('#temperature-reset').click(function() {
    thermostat.reset();
    document.getElementById('degrees').innerHTML=(thermostat.temperature);
  });
  document.getElementById('degrees').innerHTML=(thermostat.temperature);
});
