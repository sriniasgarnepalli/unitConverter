document
  .getElementById("unit-converter")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const lengthInput = document.getElementById("length").value;
    const fromUnit = document.getElementById("unit").value;
    const toUnit = document.getElementById("convertTo").value;

    // Validate if the length is a valid number
    const length = parseFloat(lengthInput);
    if (isNaN(length) || length < 0) {
      document.getElementById("result").innerText =
        "Please enter a valid non-negative number for length.";
      return;
    }

    // Conversion logic
    const conversionFactors = {
      millimeter: 1,
      centimeter: 10,
      meter: 1000,
      kilometer: 1e6,
      inch: 25.4,
      foot: 304.8,
      yard: 914.4,
      mile: 1.60934e6
    };

    // Convert the length to millimeters first
    const lengthInMillimeters = length * conversionFactors[fromUnit];

    // Now convert to the desired unit
    const convertedLength = lengthInMillimeters / conversionFactors[toUnit];

    // Display the result in the result div
    document.getElementById(
      "result"
    ).innerText = `${length} ${fromUnit} is equal to ${convertedLength} ${toUnit}`;
  });
