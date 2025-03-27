function setup() {
  var km = milesToKm(26.3);
  print(km)
  var km = milesToKm(100);
  print(km)

  var km2 = 10;
  var kmToMeter = kilometerToMeter(km2) 
  print(km2 + ' km entspricht ' + kmToMeter + 'm')

  var celsius = 23;
  var celsiusToFahrenheit = celsiusToFahrenheitFunction(celsius);
  print(celsius + ' celsius entspricht ' + celsiusToFahrenheit + ' Fahrenheit.')
}

function milesToKm(miles){
  var km = miles * 1.6;
  return km;
}

function kilometerToMeter(km){
  var kmToMeter = km * 1000;
  return kmToMeter;
}

function celsiusToFahrenheitFunction(celsius){
  var fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

function draw() {
  background(220);
}
