// Write your code in this file!
function scuberGreetingForFeet(value) {
  let greeting;
  if(value <= 400) {
    greeting = 'This one is on me!';
  }
  else if(value > 2000 && value < 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  }
  else if(value > 2500) {
    greeting = 'No can do.';
  }
  return greeting;
}

function ternaryCheckCity(city) {
  let response;
  city === 'NYC' ? response = "Ok, sounds good." : response = "No go.";

  return response;
}

function switchOnCharmFromTip(tip) {
  let response;

  switch (tip) {
    case 'generous' :
      response = "Thank you so much.";
      break;
    case 'not as generous' :
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
  }
  return response;
}
