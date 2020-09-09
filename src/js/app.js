const button = document.querySelector(".button__like-text");
const bubble = document.querySelector(".bubble");
let {
    width,
    height,
    x: centerPointX,
    y: centerPointY
} = button.getBoundingClientRect(); // gives you width, height, left-X,top-y of the button

centerPointX = centerPointX + width / 2; //  center point of button on x-axis
centerPointY = centerPointY + height / 2; //  center point of button on y-axis

/*************** Functions ***************/

let distance = 80;
let mouseHasEntered = true;
let mouseIsInButtonTerritory;

function mouseMove(e) {
    const x = e.x; // current x of cursor
    const y = e.y; // current y of cursor
    const leftBorderLine = centerPointX - distance;
    const rightBorderLine = centerPointX + distance;
    const topBorderLine = centerPointY - distance;
    const bottomBorderline = centerPointY + distance;
    const xWalk = (x - centerPointX) / 2; // the distance to move the button when mouse moves on X axis
    const yWalk = (y - centerPointY) / 2; // the distance to move the button when mouse moves on Y axis

    mouseIsInButtonTerritory =
        x > leftBorderLine &&
        x < rightBorderLine &&
        y > topBorderLine &&
        y < bottomBorderline; // becomes true if  mouse is inside all of these border-line

    if (mouseIsInButtonTerritory) {
        if (mouseHasEntered) {
            // this must happen only once to create outside borderline
            //creating another level borderline by incresing distance;
            // while cursor is returing the button comes out of nearest border-line and return from this borderline
            distance = 160;
            mouseHasEntered = false;
        }
        catchCursor(xWalk, yWalk); // call the function when mouse in in the button's territory
    } else {
        resetPositon();
    }
}

function resetPositon() {
    // resets the postion of the button as it was initial.
    button.style.transform = `translate(${0}px, ${0}px)`;
    if (!mouseHasEntered) distance = 80;
    mouseHasEntered = true;
    // when button is return to it's position (mouseHasEntered = true) lets to increase the initial borderline of button for the next time
}

function catchCursor(xWalk, yWalk) {
    // translates the button in the direction where cursor is.
    button.style.transform = `translate(${xWalk}px, ${yWalk}px)`;
}

function positionTheBubble(e) {
    bubble.style.left = `${e.x}px`;
    bubble.style.top = `${e.y}px`;
    if (mouseIsInButtonTerritory || e.target.classList.contains("nav__link")) {
        bubble.classList.add("bubble--big");
    } else {
        bubble.classList.remove("bubble--big");
    }
}

/*************** Event-handler ***************/

window.addEventListener("mousemove", function(e) {
    positionTheBubble(e);
    mouseMove(e);
});

window.addEventListener("mouseout", resetPositon);

