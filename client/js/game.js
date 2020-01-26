"use strict";

function toggleUI(id) {
    let idobject = window.parent.document.getElementById(id).catch(() => {
        return;
    });
    if(window.parent.document.getElementById(id).style.display == "none") {
        window.parent.document.getElementById(id).style.display = "block";
    } else {
        window.parent.document.getElementById(id).style.display = "none";
    }
}

toggleUI("h");

document.getElementById("h").style.display = "block";