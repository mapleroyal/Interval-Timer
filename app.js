console.log("script is working");

// PLUS AND MINUS BUTTONS
let countdownMinutesMinus = document.querySelector("#countdown-minutes-minus");
let countdownMinutesPlus = document.querySelector("#countdown-minutes-plus");
let countdownSecondsMinus = document.querySelector("#countdown-seconds-minus");
let countdownSecondsPlus = document.querySelector("#countdown-seconds-plus");
let workMinutesMinus = document.querySelector("#work-minutes-minus");
let workMinutesPlus = document.querySelector("#work-minutes-plus");
let workSecondsMinus = document.querySelector("#work-seconds-minus");
let workSecondsPlus = document.querySelector("#work-seconds-plus");
let restMinutesMinus = document.querySelector("#rest-minutes-minus");
let restMinutesPlus = document.querySelector("#rest-minutes-plus");
let restSecondsMinus = document.querySelector("#rest-seconds-minus");
let restSecondsPlus = document.querySelector("#rest-seconds-plus");
let cooldownMinutesMinus = document.querySelector("#cooldown-minutes-minus");
let cooldownMinutesPlus = document.querySelector("#cooldown-minutes-plus");
let cooldownSecondsMinus = document.querySelector("#cooldown-seconds-minus");
let cooldownSecondsPlus = document.querySelector("#cooldown-seconds-plus");
let repsMinus = document.querySelector("#reps-input-minus");
let repsPlus = document.querySelector("#reps-input-plus");

// NUMBER INPUT FIELDS
let countdownMinutes = document.querySelector("#countdown-minutes");
let countdownSeconds = document.querySelector("#countdown-seconds");
let workMinutes = document.querySelector("#work-minutes");
let workSeconds = document.querySelector("#work-seconds");
let restMinutes = document.querySelector("#rest-minutes");
let restSeconds = document.querySelector("#rest-seconds");
let cooldownMinutes = document.querySelector("#cooldown-minutes");
let cooldownSeconds = document.querySelector("#cooldown-seconds");
let reps = document.querySelector("#reps-input");

// INCREMENTING AND DECREMENTING FUNCTIONS
let stepDown = function () {
  this.parentNode.querySelector("input[type=number]").stepDown();
  console.log(this.parentNode.querySelector("input[type=number]"));
  console.log(this.parentNode.querySelector("input[type=number]").value);
};
let stepUp = function () {
  this.parentNode.querySelector("input[type=number]").stepUp();
  console.log(this.parentNode.querySelector("input[type=number]"));
  console.log(this.parentNode.querySelector("input[type=number]").value);
};

// CALLING INCREMENTING OR DECREMENTING FUNCTIONS WHEN BUTTONS ARE PRESSED
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
repsMinus.addEventListener("click", stepDown);
repsPlus.addEventListener("click", stepUp);
