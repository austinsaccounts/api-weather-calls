import '../src/scss/input.scss';
import $ from "jquery";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
      let city =$('#location').val();
      $('#location').val('');
        $.ajax({
          url: 'http://openweathermap.org/data/2.5/weather?zip=97213,us&appid=b6907d289e10d714a6e88b30761fae22',
          type: 'GET',
          data: {
            format: 'json'
          },
          success: function(response) {
            $('.showHumidity').text(`the humidity in ${city} is ${response.main.humidity}%`);
            $('.showTemp').text(`the temperature in kelvins is ${response.main.temp}.`);
          },
          error: function() {
            $('#errors').text("there was a problem processing your request, please try again.");
          }
      });
  });
});
