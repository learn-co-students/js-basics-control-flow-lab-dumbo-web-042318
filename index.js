// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let greeting

  if (someValue <= 400) {
    greeting = 'This one is on me!';
  } else  if (someValue > 2500) {
    greeting = 'No can do.';
  } else {
    greeting = 'I will gladly take your thirty bucks.'
  }

  return greeting
}

function ternaryCheckCity(destination) {
  const checkCity = (destination === "NYC") ? "Ok, sounds good." : "No go."

  return checkCity
}

function switchOnCharmFromTip(tipAmount) {
  let response;

  switch (tipAmount) {
    case 'generous':
    response = "Thank you so much.";
    break;
    case 'not as generous':
    response = "Thank you.";
    break;
    default:
    response = "Bye.";
    break;
  }

  return response
}
