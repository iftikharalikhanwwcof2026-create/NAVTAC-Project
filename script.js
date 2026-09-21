/* =========================
   TOOLS DROPDOWN
========================= */

const toolsButton = document.getElementById("toolsButton");

const toolsDropdown = document.getElementById("toolsDropdown");

const toolsArrow = document.getElementById("toolsArrow");



/* CLICK TO OPEN/CLOSE */

toolsButton.addEventListener("click", function(event) {

    event.stopPropagation();

    toolsDropdown.classList.toggle("show");


    /* Rotate arrow */

    if (toolsDropdown.classList.contains("show")) {

        toolsArrow.style.transform = "rotate(180deg)";

    } else {

        toolsArrow.style.transform = "rotate(0deg)";
    }

});


/* =========================
   CLOSE WHEN CLICKING OUTSIDE
========================= */

document.addEventListener("click", function(event) {

    if (!toolsDropdown.contains(event.target) &&
        !toolsButton.contains(event.target)) {

        toolsDropdown.classList.remove("show");

        toolsArrow.style.transform = "rotate(0deg)";
    }

});


/* =========================
   COUNTDOWN TIMER
========================= */

let totalSeconds =
    (28 * 60 * 60) +
    (53 * 60) +
    9;



function updateTimer() {

    let hours =
        Math.floor(totalSeconds / 3600);


    let minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    let seconds =
        totalSeconds % 60;



    /* Add leading zero */

    hours =
        String(hours).padStart(2, "0");


    minutes =
        String(minutes).padStart(2, "0");


    seconds =
        String(seconds).padStart(2, "0");



    /* Put values on webpage */

    document.getElementById("hours").textContent =
        hours;


    document.getElementById("minutes").textContent =
        minutes;


    document.getElementById("seconds").textContent =
        seconds;



    /* Countdown */

    if (totalSeconds > 0) {

        totalSeconds--;

    }

}



/* Run every second */

updateTimer();

setInterval(updateTimer, 1000);



/* =========================
   CLOSE OFFER BAR
========================= */

document
    .getElementById("closeOffer")
    .addEventListener("click", function() {

        document
            .querySelector(".offer-bar")
            .style.display = "none";

    });