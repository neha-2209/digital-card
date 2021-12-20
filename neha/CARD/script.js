// document.addEventListener('DOMContentLoaded', function (event) {

//     document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
//     document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';

//     document.getElementById('flip-card-btn-turn-to-back').onclick = function () {
//         document.getElementById('flip-card').classList.toggle('do-flip');

//     }

//         ;

//     document.getElementById('flip-card-btn-turn-to-front').onclick = function () {
//         document.getElementById('flip-card').classList.toggle('do-flip');
//         behavior: 'smooth'
//     }

//         ;

// }

// );





document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
    document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';
    document.getElementById('flip-card-btn-turn-to-back').onclick = function () {
        document.getElementById('flip-card').classList.toggle('do-flip');
    };
    document.getElementById('flip-card-btn-turn-to-front').onclick = function () {
        document.getElementById('flip-card').classList.toggle('do-flip');
    };
});


const carSld = document.getElementById("carrusel-slides");
const carSlds = document.querySelector("#carrusel-slides .slide");
const carRight = document.querySelector(".btn-next");
const carLeft = document.querySelector(".btn-prev");
let direction;

carRight.onclick = function () {
    carSld.scrollLeft += 220;
}



carLeft.onclick = function () {
    carSld.scrollLeft -= 220;
}







function openCity(evt, cityName) {
    var i,
        tabcontent,
        tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");


    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
















// videovideo


var videoId = 'video';
var scaleFactor = 0.25;
var snapshots = [];

/**
 * Captures a image frame from the provided video element.
 *
 * @param {Video} video HTML5 video element from where the image frame will be captured.
 * @param {Number} scaleFactor Factor to scale the canvas element that will be return. This is an optional parameter.
 *
 * @return {Canvas}
 */
function capture(video, scaleFactor) {
    if (scaleFactor == null) {
        scaleFactor = 1;
    }

    var w = video.videoWidth * scaleFactor;
    var h = video.videoHeight * scaleFactor;
    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, w, h);
    return canvas;
}

/**
 * Invokes the <code>capture</code> function and attaches the canvas element to the DOM.
 */
function shoot() {
    var video = document.getElementById(videoId);
    var output = document.getElementById('output');
    var canvas = capture(video, scaleFactor);

    canvas.onclick = function () {
        window.open(this.toDataURL());
    }

        ;
    snapshots.unshift(canvas);
    output.innerHTML = '';

    for (var i = 0; i < 4; i++) {
        output.appendChild(snapshots[i]);
    }
}