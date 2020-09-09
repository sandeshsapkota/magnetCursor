document.getElementById("scrollBottomButton").onclick = function () {
    var duration = document.getElementById("bottomScrollDuration").value * 1000;
    scrollIt(document.querySelector("#bottom-row"), duration, "easeOutQuad");
};

document.getElementById("scrollTopButton").onclick = function () {
    var duration = document.getElementById("topScrollDuration").value * 1000;
    scrollIt(document.getElementById("top-row"), duration, "easeOutQuad");
};

// thanks to https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
function scrollIt(destination, duration = 200, easing = "linear", callback) {
    const easings = {
        linear(t) {
            return t;
        },
        easeOutQuad(t) {
            return t * (2 - t);
        }
    };

    const start = window.pageYOffset;
    const startTime = "now" in window.performance
        ? performance.now()
        : new Date().getTime();

    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
    const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName("body")[0].clientHeight;
    const destinationOffset = typeof destination === "number"
        ? destination
        : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(
        documentHeight - destinationOffset < windowHeight
            ? documentHeight - windowHeight
            : destinationOffset
    );

    if ("requestAnimationFrame" in window === false) {
        window.scroll(0, destinationOffsetToScroll);
        if (callback) {
            callback();
        }
        return;
    }

    function scroll() {
        const now = "now" in window.performance
            ? performance.now()
            : new Date().getTime();
        const time = Math.min(1, (now - startTime) / duration);
        const timeFunction = easings[easing](time);
        window.scroll(
            0,
            Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start)
        );

        if (window.pageYOffset === destinationOffsetToScroll) {
            if (callback) {
                callback();
            }
            return;
        }

        requestAnimationFrame(scroll);
    }

    scroll();
}


// scroll testing
var middleHtml = [];

const schiller = "Nur Beharrung führt zum Ziel, Nur die Fülle führt zur Klarheit, Und im Abgrund wohnt die Wahrheit.".split(' ')

for (var i = 0; i < schiller.length; i += 1) {
    middleHtml.push("<div class=' container row' id='scrolling'><h1 style='margin: 30rem 10rem 30rem 0;font-size: 3.5em;font-family: Helvetica, sans-serif;color: #fff;'>" + schiller[i] + "</h1></div>");
}


document.getElementById('middle').innerHTML = middleHtml.join('');