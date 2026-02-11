// fortune.js - Fortunate Cow
import * as cowsay from "cowsay";

// YOUR FORTUNES: Replace these with your own!
// Pick a theme that interests you: motivational quotes, coding tips,
// jokes, song lyrics, advice to your future self — whatever you want.
const fortunes = [
  "Comparison is the theif of joy",
  "Shoot for the moon. Even if you miss, you'll land among the stars.",
  "You miss 100% of the shots you don't take.",
  "Don't cry because it's over, smile because it happened.",
  "Practice beats talent when talent doesn't practice."
];

// Pick a random fortune
const randomIndex = Math.floor(Math.random() * fortunes.length);
const todaysFortune = fortunes[randomIndex];

// Time-based greeting
// Get the current time
const now = new Date();
const hour = now.getHours();
// Determine proper greeting based on the hour of the day
let greeting;
if (hour < 12) {
  greeting = "Good morning"
} else if (hour < 18) {
  greeting = "Good afternoon"
} else {
  greeting = "Good evening"
}


// Display the cow (or change the creature — it's your project!)
console.log(cowsay.say({ text: `${greeting}! ${todaysFortune}` }));
