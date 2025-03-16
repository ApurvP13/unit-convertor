// Weight (Mass)
// 1 kilogram (kg) = 2.20462 pounds (lbs)
// 1 pound (lb) = 0.453592 kilograms (kg)

// Volume
// 1 liter (L) = 0.264172 gallons (US)
// 1 gallon (US) = 3.78541 liters (L)

// Length
// 1 meter (m) = 3.28084 feet (ft)
// 1 foot (ft) = 0.3048 meters (m)

const convertBtn = document.getElementById("convert-btn");
const valInput = document.getElementById("val-input");
const lengthVal = document.getElementById("length-val");
const volumeVal = document.getElementById("volume-val");
const massVal = document.getElementById("mass-val");

function render(val, unit) {
  let retVal = "";
  if (unit === "length") {
    const mtToFt = (val * 3.28084).toFixed(3);
    const ftToMt = (val * 0.3048).toFixed(3);
    retVal = `${val} meters = ${mtToFt} feet | ${val} feet = ${ftToMt} meters`;
    return retVal;
  } else if (unit === "volume") {
    const ltToGal = (val * 0.264172).toFixed(3);
    const galToLt = (val * 3.78541).toFixed(3);
    retVal = `${val} liters = ${ltToGal} gallons | ${val} gallons = ${galToLt} liters`;
    return retVal;
  } else {
    const kgToPnd = (val * 2.20462).toFixed(3);
    const pndToKg = (val * 0.453592).toFixed(3);
    retVal = `${val} kg = ${kgToPnd} pounds | ${val} pounds = ${pndToKg} kgs`;
    return retVal;
  }
}

convertBtn.addEventListener("click", () => {
  const val = valInput.value;
  lengthVal.textContent = render(val, "length");
  volumeVal.textContent = render(val, "volume");
  massVal.textContent = render(val, "mass");
});
