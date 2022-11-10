console.log("script is working");

let repsValue = 0;
let timeInSeconds = 0;
const buttons = document.querySelectorAll("button[type=button]");

// CLOCK UPDATER
let clockUpdater = function () {
  // update repsValue every time, at the start
  let repsValue = parseInt(document.querySelector("#reps-input").value);

  // update timeInSeconds every time, after you know the repsValue
  timeInSeconds =
    repsValue *
    (Array.from(document.querySelectorAll("input[type=number]"))
      .map((obj) => {
        if (obj.id.includes("minutes")) {
          return obj.value * 60;
        } else {
          return obj.value;
        }
      })
      .reduce((prev, curr) => parseInt(prev) + parseInt(curr)) -
      repsValue);

  // given the time in seconds, you can figure out hours, minutes, then remaining seconds
  let hours = Math.floor(timeInSeconds / 3600);
  let secondsMinusHours = timeInSeconds - 3600 * hours;
  let minutes = Math.floor(secondsMinusHours / 60);
  let secondsMinusMinutesAndHours = secondsMinusHours - 60 * minutes;

  // setting the display using hours, minutes, and remaining seconds
  document.getElementById("total-time-display-hours").innerHTML = hours;
  if (minutes.toString().length < 2) {
    document.getElementById(
      "total-time-display-minutes"
    ).innerHTML = `0${minutes}`;
  } else {
    document.getElementById("total-time-display-minutes").innerHTML = minutes;
  }
  if (secondsMinusMinutesAndHours.toString().length < 2) {
    document.getElementById(
      "total-time-display-seconds"
    ).innerHTML = `0${secondsMinusMinutesAndHours}`;
  } else {
    document.getElementById("total-time-display-seconds").innerHTML =
      secondsMinusMinutesAndHours;
  }
};

// INCREMENTING AND DECREMENTING FUNCTIONS
let stepDown = function () {
  this.parentNode.querySelector("input[type=number]").stepDown();
  clockUpdater();
};

let stepUp = function () {
  this.parentNode.querySelector("input[type=number]").stepUp();
  clockUpdater();
};

// INCREMENTING OR DECREMENTING FUNCTIONS WHEN BUTTONS ARE CLICKED
buttons.forEach((button) => {
  if (button.classList.contains("plus")) {
    button.addEventListener("click", stepUp);
  }
  if (button.classList.contains("minus")) {
    button.addEventListener("click", stepDown);
  }
});

// countdownMinutesMinus.addEventListener("click", stepDown);
// countdownMinutesPlus.addEventListener("click", stepUp);
// countdownSecondsMinus.addEventListener("click", stepDown);
// countdownSecondsPlus.addEventListener("click", stepUp);
// workMinutesMinus.addEventListener("click", stepDown);
// workMinutesPlus.addEventListener("click", stepUp);
// workSecondsMinus.addEventListener("click", stepDown);
// workSecondsPlus.addEventListener("click", stepUp);
// restMinutesMinus.addEventListener("click", stepDown);
// restMinutesPlus.addEventListener("click", stepUp);
// restSecondsMinus.addEventListener("click", stepDown);
// restSecondsPlus.addEventListener("click", stepUp);
// cooldownMinutesMinus.addEventListener("click", stepDown);
// cooldownMinutesPlus.addEventListener("click", stepUp);
// cooldownSecondsMinus.addEventListener("click", stepDown);
// cooldownSecondsPlus.addEventListener("click", stepUp);
// repsMinus.addEventListener("click", stepDown);
// repsPlus.addEventListener("click", stepUp);

// NUMBER INPUT VALUES AS TYPEOF NUMBERS
// let countdownMinutesValue = parseInt(
//   document.querySelector("#countdown-minutes").value
// );
// let countdownSecondsValue = parseInt(
//   document.querySelector("#countdown-seconds").value
// );
// let workMinutesValue = parseInt(document.querySelector("#work-minutes").value);
// let workSecondsValue = parseInt(document.querySelector("#work-seconds").value);
// let restMinutesValue = parseInt(document.querySelector("#rest-minutes").value);
// let restSecondsValue = parseInt(document.querySelector("#rest-seconds").value);
// let cooldownMinutesValue = parseInt(
//   document.querySelector("#cooldown-minutes").value
// );
// let cooldownSecondsValue = parseInt(
//   document.querySelector("#cooldown-seconds").value
// );

// PLUS AND MINUS BUTTONS
// let countdownMinutesMinus = document.querySelector("#countdown-minutes-minus");
// let countdownMinutesPlus = document.querySelector("#countdown-minutes-plus");
// let countdownSecondsMinus = document.querySelector("#countdown-seconds-minus");
// let countdownSecondsPlus = document.querySelector("#countdown-seconds-plus");
// let workMinutesMinus = document.querySelector("#work-minutes-minus");
// let workMinutesPlus = document.querySelector("#work-minutes-plus");
// let workSecondsMinus = document.querySelector("#work-seconds-minus");
// let workSecondsPlus = document.querySelector("#work-seconds-plus");
// let restMinutesMinus = document.querySelector("#rest-minutes-minus");
// let restMinutesPlus = document.querySelector("#rest-minutes-plus");
// let restSecondsMinus = document.querySelector("#rest-seconds-minus");
// let restSecondsPlus = document.querySelector("#rest-seconds-plus");
// let cooldownMinutesMinus = document.querySelector("#cooldown-minutes-minus");
// let cooldownMinutesPlus = document.querySelector("#cooldown-minutes-plus");
// let cooldownSecondsMinus = document.querySelector("#cooldown-seconds-minus");
// let cooldownSecondsPlus = document.querySelector("#cooldown-seconds-plus");
// let repsMinus = document.querySelector("#reps-input-minus");
// let repsPlus = document.querySelector("#reps-input-plus");

// NUMBER INPUT FIELDS
// let countdownMinutes = document.querySelector("#countdown-minutes");
// let countdownSeconds = document.querySelector("#countdown-seconds");
// let workMinutes = document.querySelector("#work-minutes");
// let workSeconds = document.querySelector("#work-seconds");
// let restMinutes = document.querySelector("#rest-minutes");
// let restSeconds = document.querySelector("#rest-seconds");
// let cooldownMinutes = document.querySelector("#cooldown-minutes");
// let cooldownSeconds = document.querySelector("#cooldown-seconds");
// let reps = document.querySelector("#reps-input");
