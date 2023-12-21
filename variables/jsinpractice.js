// sitas kodo gabalas 'pracheckina' ar kintamasis yra array tipo, ir ar array nera tuscias;
// jai taip nera kas pamineta eiluteje auksciau, galiausiai ismeta didziausia arrejaus skaitine reiksme;
// norint pratesuoti manipuliuokite 'myArray' variable

let myArray = [10, 2001, 5000, 22222];

if (myArray.length === 0) {
  console.log("EMPTY ARRAY PLEASE FIX ASAP!!!");
} else if (Array.isArray(myArray)) {
  function didziausiasSkaiciusSarase(value) {
    let didziausias = Math.max.apply(this, value);
    return "Valio sitas skaicius yra didziausias: " + didziausias;
  }
  let abc = didziausiasSkaiciusSarase(myArray);
  console.log(abc);
} else {
  console.log("WOW THIS IS NOT ARRAY");
}

// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// Jai randomKintamasis ne skaicius isspausdins kad tai ne skaicius;
// Jai randomKintamasis skaiciaus isspausdins kiek simboliu turi;
// MINTIS! Veikia tik su Intigers to ko prase uzduotis;
const randomKintamasis = 1;

if (Number.isInteger(randomKintamasis)) {
  test = randomKintamasis.toString().length;
  console.log("Simboliu randomKintamajeme yra:", test);
} else {
  console.log("Tai ne skaicius!");
}
