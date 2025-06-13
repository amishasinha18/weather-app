function getWeather() {
  const location = document.getElementById('locationInput').value;
  const resultDiv = document.getElementById('weatherResult');

  if (!location) {
    resultDiv.innerHTML = "<p>Please enter a location.</p>";
    return;
  }

  const apiKey = "0d3c5466a36449e4b6134558251306";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Location not found");
      return response.json();
    })
    .then(data => {
      const tempC = data.current.temp_c;
      const condition = data.current.condition.text;
      resultDiv.innerHTML = `
        <p><strong>Location:</strong> ${data.location.name}, ${data.location.country}</p>
        <p><strong>Temperature:</strong> ${tempC} °C</p>
        <p><strong>Condition:</strong> ${condition}</p>
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
