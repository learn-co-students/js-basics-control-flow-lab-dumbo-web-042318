// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let message;
  if (distance > 2500) {
    message = "No can do."
  } else if (distance <= 400) {
    message = "This one is on me!";
  } else if (distance >= 2000) {
    message = "I will gladly take your thirty bucks."
  }
  return message;
}

function ternaryCheckCity(city) {
  let cityMessage;
  (city === "NYC") ? (cityMessage = "Ok, sounds good.") : (cityMessage = "No go.");
  return cityMessage;
}

function switchOnCharmFromTip(tip) {
  let message = "Bye.";
  switch (tip) {
    case "generous":
      message = "Thank you so much."
      break;
    case "not as generous":
      message = "Thank you."
      break;
  }
  return message;
}
