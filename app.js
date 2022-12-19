console.log("script is working");

let timeInSeconds = 0;
const buttons = document.querySelectorAll("button[type=button]");
let countdownMinutes = document.querySelector("#countdown-minutes");
let countdownSeconds = document.querySelector("#countdown-seconds");
let workMinutes = document.querySelector("#work-minutes");
let workSeconds = document.querySelector("#work-seconds");
let restMinutes = document.querySelector("#rest-minutes");
let restSeconds = document.querySelector("#rest-seconds");
let cooldownMinutes = document.querySelector("#cooldown-minutes");
let cooldownSeconds = document.querySelector("#cooldown-seconds");
let progressBar = document.querySelector(".progress-bar");

// CLOCK DISPLAY (TOTAL TIME) PARTS
let totalRemainingHours = document.getElementById("total-time-display-hours");
let totalRemainingMinutes = document.getElementById(
  "total-time-display-minutes"
);
let totalRemainingSeconds = document.getElementById(
  "total-time-display-seconds"
);

// PROGRESS BAR PHASE PARTS
let progressPhaseHours = document.getElementById(
  "progress-bar-text-time-hours"
);
let progressPhaseMinutes = document.getElementById(
  "progress-bar-text-time-minutes"
);
let progressPhaseSeconds = document.getElementById(
  "progress-bar-text-time-seconds"
);

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
  if (hours.toString().length < 2) {
    totalRemainingHours.innerHTML = `0${hours}`;
  } else {
    totalRemainingHours.innerHTML = hours;
  }
  if (minutes.toString().length < 2) {
    totalRemainingMinutes.innerHTML = `0${minutes}`;
  } else {
    totalRemainingMinutes.innerHTML = minutes;
  }
  if (secondsMinusMinutesAndHours.toString().length < 2) {
    totalRemainingSeconds.innerHTML = `0${secondsMinusMinutesAndHours}`;
  } else {
    totalRemainingSeconds.innerHTML = secondsMinusMinutesAndHours;
  }
};
clockUpdater();

// INCREMENTING AND DECREMENTING FUNCTIONS
let stepDown = function () {
  this.parentNode.querySelector("input[type=number]").stepDown();
  clockUpdater();
};

let stepUp = function () {
  this.parentNode.querySelector("input[type=number]").stepUp();
  clockUpdater();
};

// CALLING INCREMENTING OR DECREMENTING FUNCTIONS WHEN BUTTONS ARE CLICKED
buttons.forEach((button) => {
  if (button.classList.contains("plus")) {
    button.addEventListener("click", stepUp);
  }
  if (button.classList.contains("minus")) {
    button.addEventListener("click", stepDown);
  }
});

//
//
// Changing this function to just be a generic timer, and it will be passed the appropriate
// values depending on what timer it will be. The body should run in a setInterval that has
// the total seconds decrementing, like this:
// let phaseClockUpdater = setInterval(() => {
//     function
//   }, 100);
// That updates 10x/sec,
//
//
let timer = function (mins, secs) {
  let countdownTotalSeconds = parseInt(mins) * 60 + parseInt(secs);

  progressBar.style.transitionDuration = `${countdownTotalSeconds}s`;

  // Putting this inside a setTimeout solves the problem of it updating "too quickly" and
  // therefore not animating. Setting the setTimeout to 0 makes it so that there isn't
  // actually a delay, so it's kind of a hack :).
  setTimeout(() => {
    progressBar.style.strokeDashoffset = "100";
  }, 0);

  // given the time in seconds, you can figure out hours, minutes, then remaining seconds
  let hours = Math.floor(countdownTotalSeconds / 3600);
  let secondsMinusHours = countdownTotalSeconds - 3600 * hours;
  let minutes = Math.floor(secondsMinusHours / 60);
  let secondsMinusMinutesAndHours = secondsMinusHours - 60 * minutes;

  // setting the display using hours, minutes, and remaining seconds
  if (hours.toString().length < 2) {
    progressPhaseHours.innerHTML = `0${hours}`;
  } else {
    progressPhaseHours.innerHTML = hours;
  }
  if (minutes.toString().length < 2) {
    progressPhaseMinutes.innerHTML = `0${minutes}`;
  } else {
    progressPhaseMinutes.innerHTML = minutes;
  }
  if (secondsMinusMinutesAndHours.toString().length < 2) {
    progressPhaseSeconds.innerHTML = `0${secondsMinusMinutesAndHours}`;
  } else {
    progressPhaseSeconds.innerHTML = secondsMinusMinutesAndHours;
  }
};
timer(countdownMinutes.value, countdownSeconds.value);
//
//
//
//
//

// let workTimer = function (mins, secs) {};
// let restTimer = function (mins, secs) {};

// the function that will run the work and rest timers until reps runs out, then runs the cooldown timer then stops
let workAndRest = function (
  workMins,
  workSecs,
  restMins,
  restSecs,
  cooldownMins,
  cooldownSecs
) {
  let nextReps = reps - 1;

  if (nextReps > 0) {
    workTimer(workMins, workSecs);
    restTimer(restMins, restSecs);
  } else {
    cooldownTimer(cooldownMins, cooldownSecs);
    return;
  }

  workAndRest(reps - 1);
};

// let cooldownTimer = function (mins, secs) {};

// MAIN FUNCTION, THIS DOES ALL THE WORK AFTER YOU PRESS START
let mainFunction = function (reps) {
  countdownTimer(countdownMinutes, countdownSeconds);

  workAndRest(
    workMinutes,
    workSeconds,
    restMinutes,
    restSeconds,
    cooldownMinutes,
    cooldownSeconds
  );

  cooldownTimer();
};

// WHAT HAPPENS WHEN YOU PRESS THE START BUTTON
let startPressed = function () {
  // get number of reps
  let repsValue = parseInt(document.querySelector("#reps-input").value);

  // change what's displayed
  document.querySelector("#input-area-container").style.display = "none";
  document.querySelector("#start-button").style.display = "none";
  document.querySelector("#total-time-display-title").style.display = "none";
  document.querySelector("#progress-bar-container").style.display = "grid";

  // run main function
  mainFunction(repsValue);
};
document.querySelector("#start-button").addEventListener("click", startPressed);

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
