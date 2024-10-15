document
  .getElementById("weight-converter")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const weightInput = document.getElementById("weight").value;
    const fromUnit = document.getElementById("weightUnit").value;
    const toUnit = document.getElementById("weightConvertTo").value;

    // Validate if the weight is a valid number
    const weight = parseFloat(weightInput);
    if (isNaN(weight) || weight < 0) {
      document.getElementById("weight-result").innerText =
        "Please enter a valid non-negative number for weight.";
      return;
    }

    // Conversion logic
    const conversionFactors = {
      grams: 1,
      kilograms: 1000,
      pounds: 453.592,
      ounces: 28.3495
    };

    // Convert weight
    const weightInGrams = weight * conversionFactors[fromUnit];
    const convertedWeight = weightInGrams / conversionFactors[toUnit];

    // Display result
    document.getElementById(
      "weight-result"
    ).innerText = `${weight} ${fromUnit} is equal to ${convertedWeight} ${toUnit}`;
  });
