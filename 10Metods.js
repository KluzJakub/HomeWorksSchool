// Funkce na součet dvou čísel
function soucet(a, b) {
  return a + b;
}

// Funkce na zjištění největšího čísla ze dvou čísel
function vetsiZDvou(a, b) {
  return Math.max(a, b);
}

// Funkce na kontrolu, zda je číslo prvočíslo
function jePrvocislo(cislo) {
  if (cislo <= 1) {
    return false;
  }
  
  // Funkce na spojení dvou řetězců
function spojeniRetezcu(retezec1, retezec2) {
  return retezec1 + " " + retezec2;
}

// Funkce na převod teploty z Celsius na Fahrenheit
function celsToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

// Funkce na výpočet mocniny čísla
function mocnina(cislo, exponent) {
  return Math.pow(cislo, exponent);
}

// Funkce na zjištění, zda je číslo sudé nebo liché
function sudeLiche(cislo) {
  if (cislo % 2 === 0) {
    return "Sudé";
  } else {
    return "Liché";
  }
}

// Cyklus for, který vypíše čísla od 1 do 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Cyklus while, který vypíše čísla od 1 do 5
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

// Cyklus do-while, který vypíše čísla od 1 do 5
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);
