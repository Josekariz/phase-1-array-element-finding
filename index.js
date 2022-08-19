// <<<<<<<<<<<<<<<< Find Elements Using a Simple Condition with Array.prototype.indexOf(

const cards = [
  "queen of hearts",
  "jack of clubs",
  "ten of diamonds",
  "ace of spades",
];
//console.log(cards.indexOf("jack of clubs"));
//console.log(cards.indexOf("ace of spades"));
//element isn't contained in the array, it returns -1.

//console.log(cards.indexOf(""));

//<<<<<<<<<<<<<<<<<<<<<Find Elements Using More Complex Conditions>>>>>>>>>>>>>>>>Array.prototype.find()

function isodd(element, index, array) {
  return element % 2 === 1;
}
console.log([4, 7, 5,  8, 10].find(isodd));
console.log([4, 6, 12, 3, 10].find(isodd));