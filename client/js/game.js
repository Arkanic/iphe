"use strict";

function toggleUI(id) {
    let idobject = document.getElementById(id).catch(() => {
        return;
    });
    if(document.getElementById(id).style.display == "none") {
        document.getElementById(id).style.display = "block";
    } else {
        document.getElementById(id).style.display = "none";
    }
}

toggleUI("h");