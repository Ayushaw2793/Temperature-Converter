function convertTemp() {
    const inputVal = document.getElementById("tempInput").value;
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;

    // Validate input
    if (isNaN(inputVal) || inputVal === "") {
        alert("Please enter a valid number!");
        return;
    }

    let temp = parseFloat(inputVal);
    let result;

    // Convert from selected unit to Celsius
    let celsius;
    if (from === "C") celsius = temp;
    if (from === "F") celsius = (temp - 32) * 5/9;
    if (from === "K") celsius = temp - 273.15;

    // Convert Celsius to target unit
    if (to === "C") result = celsius;
    if (to === "F") result = (celsius * 9/5) + 32;
    if (to === "K") result = celsius + 273.15;

    document.getElementById("result").innerText =
        `Converted Value: ${result.toFixed(2)} °${to}`;
}
