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
// Jai randomKintamasis ne skaiciaus isspausidns kad tai ne skaicius;
// Jai randomKintamasis skaiciaus isspausidns kiek simboliu turi;
// MINTIS! Veikia tik su Intigers to ko prase uzduotis;
const randomKintamasis = 29;

if (Number.isInteger(randomKintamasis)) {
  test = randomKintamasis.toString().length;
  console.log("Simboliu randomKintamajeme yra:", test);
} else {
  console.log("Tai ne skaicius!");
}

// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
for (let i = 0; i < 12; i++) {
  if (i % 7 === 0) {
    console.log(
      "Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai:",
      i
    );
  }
}
//Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
let sum = 0;
for (let i = 574; i <= 815; i++) {
  if (i % 1 === 0) {
    sum += i;
  }
}
console.log(sum);

//panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
let str = "abcdef";
let newString = "";
for (let i = str.length - 1; i >= 0; i--) {
  newString += str[i];
}
console.log(newString);
