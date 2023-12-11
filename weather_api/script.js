
/*
const api_key = '9be4f13b18b8324410ad0b9eb7238a20';

document.getElementById('getWeatherBtn').addEventListener('click', () => {
  let city_name = document.getElementById('city_name').value;
  city_name = city_name.trim();

  let api_call = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${api_key}`);

  api_call.then((value) => {
    return value.json();
  })
    .then((data) => {

      let tbody = document.querySelector('#tbody');
      let row = document.createElement('tr')

      row.innerHTML = `<tr>
        <td>${data.name}, ${data
          .sys.country}</td>
        <td>${data.main.temp}&deg; C</td>
        <td>${data.main.humidity}&percnt;</td>
        <td>${data.main.pressure} hPa</td>
        <td>${data.wind.speed} km/h</td>
      </tr>`;

      tbody.appendChild(row);

    })
    .catch(error => console.log(error));
});
*/

const api_key = '9be4f13b18b8324410ad0b9eb7238a20';

function fetchWeatherData() {
  let city_name = document.getElementById('city_name').value;
  city_name = city_name.trim();

  if (city_name !== '') {
    let api_call = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${api_key}`);

    api_call.then((value) => {
      return value.json();
    })
      .then((data) => {
        let tbody = document.querySelector('#tbody');
        let row = document.createElement('tr')

        row.innerHTML = `<tr>
          <td>${data.name}, ${data.sys.country}</td>
          <td>${data.main.temp}&deg; C</td>
          <td>${data.main.humidity}&percnt;</td>
          <td>${data.main.pressure} hPa</td>
          <td>${data.wind.speed} km/h</td>
        </tr>`;

        tbody.appendChild(row);
        document.getElementById('city_name').value = ''; // Clear input after search
      })
      .catch(error => {
        let displayError = document.querySelector('#displayError');
        displayError.innerHTML = "Data Not Found: Enter Correct Spelling"
        console.error(error);
      });
  }
}

document.getElementById('getWeatherBtn').addEventListener('click', fetchWeatherData);

document.getElementById('city_name').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    fetchWeatherData();
  }
});


