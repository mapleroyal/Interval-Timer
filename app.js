console.log("script is working");
let countdownMinutesMinus = document.querySelector("#countdown-minutes-minus");
let countdownMinutesPlus = document.querySelector("#countdown-minutes-plus");
let countdownSecondsMinus = document.querySelector("#countdown-seconds-minus");
let countdownSecondsPlus = document.querySelector("#countdown-seconds-plus");
let countdownMinutes = document.querySelector("#countdown-minutes");
let countdownSeconds = document.querySelector("#countdown-seconds");
let workMinutesMinus = document.querySelector("#work-minutes-minus");
let workMinutesPlus = document.querySelector("#work-minutes-plus");
let workSecondsMinus = document.querySelector("#work-seconds-minus");
let workSecondsPlus = document.querySelector("#work-seconds-plus");
let workMinutes = document.querySelector("#work-minutes");
let workSeconds = document.querySelector("#work-seconds");
let restMinutesMinus = document.querySelector("#rest-minutes-minus");
let restMinutesPlus = document.querySelector("#rest-minutes-plus");
let restSecondsMinus = document.querySelector("#rest-seconds-minus");
let restSecondsPlus = document.querySelector("#rest-seconds-plus");
let restMinutes = document.querySelector("#rest-minutes");
let restSeconds = document.querySelector("#rest-seconds");
let cooldownMinutesMinus = document.querySelector("#cooldown-minutes-minus");
let cooldownMinutesPlus = document.querySelector("#cooldown-minutes-plus");
let cooldownSecondsMinus = document.querySelector("#cooldown-seconds-minus");
let cooldownSecondsPlus = document.querySelector("#cooldown-seconds-plus");
let cooldownMinutes = document.querySelector("#cooldown-minutes");
let cooldownSeconds = document.querySelector("#cooldown-seconds");

let stepDown = function () {
  this.parentNode.querySelector("input[type=number]").stepDown();
  console.log(this.parentNode.querySelector("input[type=number]").value);
};

let stepUp = function () {
  this.parentNode.querySelector("input[type=number]").stepUp();
  console.log(this.parentNode.querySelector("input[type=number]").value);
};

countdownMinutesMinus.addEventListener("click", stepDown);
countdownMinutesPlus.addEventListener("click", stepUp);
countdownSecondsMinus.addEventListener("click", stepDown);
countdownSecondsPlus.addEventListener("click", stepUp);
workMinutesMinus.addEventListener("click", stepDown);
workMinutesPlus.addEventListener("click", stepUp);
workSecondsMinus.addEventListener("click", stepDown);
workSecondsPlus.addEventListener("click", stepUp);
restMinutesMinus.addEventListener("click", stepDown);
restMinutesPlus.addEventListener("click", stepUp);
restSecondsMinus.addEventListener("click", stepDown);
restSecondsPlus.addEventListener("click", stepUp);
cooldownMinutesMinus.addEventListener("click", stepDown);
cooldownMinutesPlus.addEventListener("click", stepUp);
cooldownSecondsMinus.addEventListener("click", stepDown);
cooldownSecondsPlus.addEventListener("click", stepUp);

// ALL OF THIS CAN BE REDUCED TO A "LET MINUS", AND "LET PLUS", IF I JUST USE A GENERIC INPUT/PLUS/MINUS FOR EACH THING, AND THEN ONLY GIVE THE VALUE AN ID TO REFERENCE LATER.
// ALSO, GIVE THE REPS THE SAME GENERIC INPUT/PLUS/MINUS.
