// function addFive(someNumber) {
//   let result
//   if (someNumber > 0) {
//     result = someNumber + 5;
//   }
//   return result;
// }
//
//  addFive(10);
//  addFive(20);
//  addFive(-5);
//  addFive(addFive(5));


function scuberGreetingForFeet(distance) {
  let greet
  if (distance <= 400) {
    greet = "This one is on me!";
  }
  else if (distance > 2000 && distance < 2500) {
    greet = "I will gladly take your thirty bucks.";
  }
  else {
    greet = "No can do."
  }
  return greet;
}

scuberGreetingForFeet(199);


function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return  "Thank you."
    default:
      return "Bye.";
  }
}
