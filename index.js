/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 
const Length = document.getElementById("length")
const Volume = document.getElementById("volume")
const Mass = document.getElementById("mass")

function getinput() {

    let value = Number(document.getElementById("userinput").value)
    if (value === 0) {
        Length.textContent = "Please enter a value"
        return
    }

    let feet = (value * 3.281).toFixed(3)
    let meters = (value / 3.281).toFixed(3)

    let gallons = (value * 0.264).toFixed(3)
    let liters = (value / 0.264).toFixed(3)

    let pounds = (value * 2.204).toFixed(3)
    let kilos = (value / 2.204).toFixed(3)

    Length.textContent = `${value} meters = ${feet} feet | ${value} feet = ${meters} meters`

    Volume.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`

    Mass.textContent = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`
}
