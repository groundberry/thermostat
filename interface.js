$(document).ready(function() {
  thermostat = new Thermostat();
  document.getElementById('degrees').innerHTML=(thermostat.temperature);

  $('#temperature-up').click(function() {
    thermostat.up();
    document.getElementById('degrees').innerHTML=(thermostat.temperature);
    $('#temperature-up').usageLight();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    document.getElementById('degrees').innerHTML=(thermostat.temperature);
    $('#temperature-up').usageLight();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    document.getElementById('degrees').innerHTML=(thermostat.temperature);
  });

  $('#power_saving-on').click(function() {
    thermostat.powerSavingMode(true);
      $('#power_saving-on').addClass('red').removeClass('black');
      $('#power_saving-off').addClass('black').removeClass('red');
  });

  $('#power_saving-off').click(function() {
    thermostat.powerSavingMode(false);
    $('#power_saving-off').addClass('red').removeClass('black');
    $('#power_saving-on').addClass('black').removeClass('red');
  });

  (function( $ ) {
    $.fn.usageLight = function() {
      var usage = thermostat.energyUsage();
      if (usage === 'low-usage') {
        $('#energy-saving-low').addClass('red');
        $('#energy-saving-medium').removeClass('red');
      } else if (usage === 'medium-usage') {
        $('#energy-saving-medium').addClass('red');
        $('#energy-saving-low').removeClass('red');
        $('#energy-saving-high').removeClass('red');
      } else {
        $('#energy-saving-high').addClass('red');
        $('#energy-saving-medium').removeClass('red');
      }
    };
  }) (jQuery);

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=c558323d2c6e677b42d9fc7b4e2c1741', function(data) {
    $('#weather').text(Math.round((data.main.temp)-273.15));
    var icon = data.weather[0].icon;
    var url = 'http://openweathermap.org/img/w/' + icon + '.png';
    $("#icon").html("<img src='" + url +"' > ");
    console.log(url)

  });




});
