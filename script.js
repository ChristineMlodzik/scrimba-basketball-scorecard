let homescoreEl = document.getElementById("homescore");

let guestscoreEl = document.getElementById("guestscore");

let scoreHome = 0;

let scoreGuest = 0;

function incrementHS1() {
    scoreHome += 1;
    homescoreEl.textContent = scoreHome;
}

function incrementHS2() {
    scoreHome += 2;
    homescoreEl.textContent = scoreHome;
}

function incrementHS3() {
    scoreHome += 3;
    homescoreEl.textContent = scoreHome;
}

function incrementGS1() {
    scoreGuest += 1;
    guestscoreEl.textContent = scoreGuest;
}

function incrementGS2() {
    scoreGuest += 2;
    guestscoreEl.textContent = scoreGuest;
}

function incrementGS3() {
    scoreGuest += 3;
    guestscoreEl.textContent = scoreGuest;
}