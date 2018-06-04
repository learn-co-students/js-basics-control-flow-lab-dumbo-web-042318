// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return "This one is on me!"
  } else if (someValue > 2500) {
    return "No can do."
  } else if (someValue > 2000) {
    return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(city) {
  const result = city === "NYC" ? "Ok, sounds good." : "No go."
    return result;
}

function switchOnCharmFromTip(tip) {

  let reply;

  switch (tip) {
    case 'generous':
      reply = 'Thank you so much.';
      break;
    case 'not as generous':
      reply = 'Thank you.';
      break;
    default:
      reply = "Bye."
  }
    return reply;
}
