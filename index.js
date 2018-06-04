// Write your code in this file!

/////
function scuberGreetingForFeet(feet) {

  if (feet <= 400) {
    result = "This one is on me!";

  } else if (feet > 2000) {
    result = 'I will gladly take your thirty bucks.';

  } if (feet > 2500) {
    result = 'No can do.';

  }
  return result
};

/////
function ternaryCheckCity(destination) {

  destination === 'NYC' ? result = "Ok, sounds good." : result = "No go."
  return result;
};

/////
function switchOnCharmFromTip(tip) {

  switch (tip) {

    case 'generous':
    result = "Thank you so much."
    break;

    case 'not as generous':
    result = "Thank you."
    break;

    default:
    result = "Bye."
    break;
  }

  return result
}
