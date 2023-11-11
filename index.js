/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.querySelector('input')
const convert = document.querySelector('button')
// p elements to render the text in
const meters = document.getElementById('meters')
const volume = document.getElementById('volume')
const kilos = document.getElementById('kilos')

let number = null;
const metric = {
    meter: function() {
        let feet;
        feet = number * 3.281;
        return feet.toFixed(3);
    },
    feet: function() {
        let meter;
        meter = number / 3.281;
        return meter.toFixed(3);
    },
    liter: function() {
        let gallon;
        gallon = number * 0.264;
        return gallon.toFixed(3);
    },
    gallon: function() {
        let liters;
        liters = number / 0.264;
        return liters.toFixed(3);
    },
    kilogram: function() {
        let pound;
        pound = number * 2.204;
        return pound.toFixed(3);
    },
    pound: function() {
        let kilo;
        kilo = number / 2.204;
        return kilo.toFixed(3);
    },
}

convert.addEventListener('click', () => {
    number = Number(input.value)
    render()
})

function render() {
    meters.textContent = `${number} meters = ${metric.meter()} feet | ${number} feet = ${metric.feet()} meters`
    volume.textContent = `${number} liters = ${metric.liter()} gallons | ${number} gallons = ${metric.gallon()} liters`
    kilos.textContent = `${number} kilos = ${metric.kilogram()} pounds | ${number} pounds = ${metric.pound()} kilos`
}