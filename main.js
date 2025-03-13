function convertirTemperatura() {
    let temperaturaCelsius = prompt("Ingresa la temperatura en grados Celsius:");

    temperaturaCelsius = Number(temperaturaCelsius);

    if (isNaN(temperaturaCelsius)) {
        console.error("Error: La entrada no es un número válido.");
        return; 
    }
    const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

    const temperaturaKelvin = temperaturaCelsius + 273.15;

    console.log(`Temperatura ingresada en Celsius: ${temperaturaCelsius} °C`);
    console.log(`Temperatura en Fahrenheit: ${temperaturaFahrenheit.toFixed(2)} °F`);
    console.log(`Temperatura en Kelvin: ${temperaturaKelvin.toFixed(2)} K`);
}

convertirTemperatura();
