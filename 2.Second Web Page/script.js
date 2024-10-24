document.getElementById("nextButton").onclick = function () {
    document.getElementById("firstParagraph").innerHTML =
        "<p>Astronomy is one of the oldest natural sciences. The early civilizations in recorded history made methodical observations of the night sky. These include the Egyptians, Babylonians, Greeks, Indians, Chinese, Maya, and many ancient indigenous peoples of the Americas. In the past, astronomy included disciplines as diverse as astrometry, celestial navigation, observational astronomy,and the making of calendars.</p>";
};

document.getElementById("leftsidebar").style.width = window.screen.width - 10 + "px";
//document.getElementById("rightsidebar").style.width=window.screen.width/2-10 + "px";
//document.getElementById("liveNASA").style.width=window.screen.width/2-10 + "px";
//document.getElementById("music").style.width=window.screen.width/2-10 + "px";

function check() {
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var errorMessage = document.getElementById("error");
    var errorTOThrow = "";
    try {
        if (password.length < 6) {
            errorTOThrow += "<br /> Password is too short.";
        }
        if (/[A-Z]/g.test(password) == false) {
            errorTOThrow += " <br /> Password shoud include at least one capital letter.";
        }
        if (/\d/g.test(password) == false) {
            errorTOThrow += " <br /> Password shoud include at least one number.";
        }
        if (password != password2) {
            errorTOThrow += "<br /> Passwords should match.";
        }
        throw errorTOThrow;
    } catch (err) {
        errorMessage.innerHTML = err;
    }
}
