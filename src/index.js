import '../src/scss/input.scss';
import $ from "jquery";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
      const city =$('#location').val();
      $('#location').val('');

      let request = new XMLHttpRequest();
    const url = `http://openweathermap.org/data/2.5/weather?q=${city},us&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});
