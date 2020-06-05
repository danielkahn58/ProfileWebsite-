document.getElementById("openPopup").onclick = function () {
    if (document.getElementById("popup").style.display == "block") {
        document.getElementById("popup").style.display = "none";
    } else {
        document.getElementById("popup").style.display = "block";
    }
}

$("#date").datepicker();

document.getElementById("submit").onclick = function () {


}

/* Hamburger Menu */
document.getElementById("openMenu").onclick = function () {
    var menu = document.getElementById("navigation-container");
    menu.classList.toggle("open");
}
