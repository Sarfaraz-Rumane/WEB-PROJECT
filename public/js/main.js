document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch weather data
    function fetchWeatherData(cityName) {
        const apiKey = 'dcf586e401467db422b5034deb01fd1c'; // Replace with your actual API key
              const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.cod === '404') {
            // City not found, display error message
            document.getElementById('city_name').textContent = 'City not found';
            document.getElementById('temp').textContent = '';
            document.getElementById('temp_status').textContent = '';
          } else {
            // Update the weather information on the page
            document.getElementById('city_name').textContent = data.name;
            const temperature = Math.round(data.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
            document.getElementById('temp').innerHTML = `<span>${temperature}</span> <sup>o</sup>C`;
  
            const weatherIconMap = {
              'Clear': 'fas fa-sun',
              'Clouds': 'fas fa-cloud',
              'Rain': 'fas fa-cloud-showers-heavy',
              'Thunderstorm': 'fas fa-bolt',
              'Snow': 'fas fa-snowflake',
              'Mist': 'fas fa-smog',
              // Add more mappings for different weather conditions
            };
  
            const weatherCondition = data.weather[0].main;
            const weatherIconClass = weatherIconMap[weatherCondition];
  
            if (weatherIconClass) {
              const iconElement = document.getElementById('temp_status');
              iconElement.innerHTML = `<i class="${weatherIconClass} weather-icon" aria-hidden="true"></i>`;
  
              // Add additional styles to the icon using CSS classes
              if (weatherCondition === 'Rain') {
                iconElement.classList.add('rain-icon');
              } else if (weatherCondition === 'Snow') {
                iconElement.classList.add('snow-icon');
              }
            } else {
              document.getElementById('temp_status').textContent = weatherCondition;
            }
  
            const dataHideElement = document.querySelector('.data_hide');
            if (dataHideElement) {
              dataHideElement.classList.remove('data_hide');
            }
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  
    // Function to handle form submission
    function handleFormSubmit(event) {
      event.preventDefault(); // Prevent the form from submitting and refreshing the page
  
      const cityName = document.getElementById('cityName').value;
  
      // Call the function to fetch weather data
      fetchWeatherData(cityName);
    }
  
    // Add event listener to the form
    document.getElementById('submitBtn').addEventListener('click', handleFormSubmit);
  });
  