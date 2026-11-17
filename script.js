//Uppgift 2

console.log("Före blocket");
//Den fungerar för den skriver ut en sträng.
console.log(name);
//Fungerar inte för att variabeln inte finns ännu, då det läses uppifrån och ner.
{
  let name = "Fredrik";
  var city = "Göteborg";
  const years = "19";

  console.log(name);
  console.log(city);
  console.log(years);
  //Alla fungerar inuti blocket.
}

console.log("Efter blocket");
//Skriver ut en sträng, då fungerar det.

console.log(city);
//var fungerar även utanför ett block, det gör inte let eller const.

//Uppgift 3
const add = (num1, num2) => {
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);

  console.log(num1 ? "truthy" : "falsy");

  if (
    num2 != null &&
    num2 != null &&
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    !Number.isNaN(num1) &&
    !Number.isNaN(num2)
  ) {
    return num1 + num2;
  }
};

/*Med let hade funktionen fungerat likadant, men variabeln hade kunnat ändras.

function add(num1, num2) {return num1 + num2;}

Return betyder att funktionen skickar tillbaka ett värde.*/

/*Uppgift 4.
En ternary operator är ett kortare sätt att skriva en if/else-sats.
== jämför värden och kan omvandla datatyper.
=== jämför både värde och datatyp.
Jag använde != null för att kontrollera att parametrarna inte är null eller undefined. Sedan kontrollerade jag att båda är siffror.*/

const num1 = 0;
let arg1;
let sum = false;

//Test 1
console.log(add(sum, 1));

//Test 2
console.log(add("0", 3));

//Test 3
console.log(add(3, "num1"));

//Test 4
console.log(add(-5, num1));

//Test 5
console.log(add(arg1, 7));

//Test 6
console.log(add());

//Sista utskrifterna
console.log(num1);
console.log(sum);

/*En variabel lagrar ett värde.
En parameter tar emot värden i en funktion.
Ett argument är värdet vi skickar till funktionen.

num1 blir 0 eftersom den är satt till 0 och inte ändras av funktionen.

Test 1: sum är false, alltså inte ett tal, så det blir felaktig input.
Test 2: "0" är en sträng, inte ett tal.
Test 3: "num1" är också en sträng, inte ett tal.
Test 4: -5 + 0 blir 5 eftersom båda är tal.
Test 5: arg1 är undefined efterom den saknr värde.
Test 6: Här skickas inga argument in, så båda är undefined.

num1 förblir 0 eftersom vi inte har ändrat den.
sum blir false eftersom vi aldrig ändras dess värde.*/
