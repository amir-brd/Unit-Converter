const inputBtn = document.querySelector("#input-btn");
const inputField = document.querySelector("#input-field");
let lengthResult = document.querySelector("#length-result");
let volumeResult = document.querySelector("#volume-result");
let massResult = document.querySelector("#mass-result");

inputBtn.addEventListener("click", function () {
    convertToLength(inputField.value);
    convertToVolume(inputField.value);
    convertToMass(inputField.value);
})

function convertToLength(value) {
    let valueFeet = Number(value) * 3.281
    let valueMeters = Number(value) * (1/3.281)
    lengthResult.innerHTML = `${value} meters = ${valueFeet.toFixed(3)} feet | ${value} feet = ${valueMeters.toFixed(3)} meters`;
}

function convertToVolume(value) {
    let valueGallons = Number(value) * 0.264
    let valueLiters = Number(value) * (1/0.264)
    volumeResult.innerHTML = `${value} liters = ${valueGallons.toFixed(3)} gallons | ${value} gallons = ${valueLiters.toFixed(3)} liters`;
}

function convertToMass(value) {
    let valuePounds = Number(value) * 2.204
    let valueKilos = Number(value) * (1/2.204)
    massResult.innerHTML = `${value} kilos = ${valuePounds.toFixed(3)} pounds | ${value} pounds = ${valueKilos.toFixed(3)} kilos`;
}
