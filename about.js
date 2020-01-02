
const $ham_icon = document.getElementById("ham-icon");
const $overlay_menu = document.getElementById("overlay-menu");
//hamburger-menu
$ham_icon.addEventListener("click", function (ev) {
    $overlay_menu.style.display = "block";
    $overlay_menu.style.opacity = ".97";
});


//making overlay elements invisible
function overlayOff() {
    $overlay_menu.style.display = "none";
    $overlay.style.display = "none";

}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        overlayOff();
    }
}
document.onClick = function (evt) {
     evt = evt || window.event;
    if ($overlay_menu.style.display = "block") {
        overlayOff();
    }
}
