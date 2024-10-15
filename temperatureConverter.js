document
  .getElementById("temperature-converter")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const temperatureInput = document.getElementById("temperature").value;
    const fromUnit = document.getElementById("temperatureUnit").value;
    const toUnit = document.getElementById("temperatureConvertTo").value;

    console.log(temperatureInput, fromUnit, toUnit);

    // Validate if the input is a valid number
    const temperature = parseFloat(temperatureInput);
    console.log(temperature);
    if (isNaN(temperature)) {
      document.getElementById("temperature-result").innerText =
        "Please enter a valid number for temperature.";
      return;
    }

    let convertedTemperature;

    // Conversion logic
    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        console.log("inside");
        convertedTemperature = (temperature * 9) / 5 + 32;
      } else if (toUnit === "kelvin") {
        convertedTemperature = temperature + 273.15;
      } else {
        convertedTemperature = temperature; // Same unit
      }
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
        convertedTemperature = ((temperature - 32) * 5) / 9;
      } else if (toUnit === "kelvin") {
        convertedTemperature = ((temperature - 32) * 5) / 9 + 273.15;
      } else {
        convertedTemperature = temperature; // Same unit
      }
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
        convertedTemperature = temperature - 273.15;
      } else if (toUnit === "fahrenheit") {
        convertedTemperature = ((temperature - 273.15) * 9) / 5 + 32;
      } else {
        convertedTemperature = temperature; // Same unit
      }
    }

    console.log(convertedTemperature);

    // Display result
    document.getElementById(
      "temperature-result"
    ).innerText = `${temperature} ${fromUnit} is equal to ${convertedTemperature.toFixed(
      2
    )} ${toUnit}`;
  });
