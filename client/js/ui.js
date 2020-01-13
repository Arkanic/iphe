module.exports = {
    toggleUI: function(id) {
        let idobject = document.getElementById(id).catch(() => {
            return;
        });
        if(idobject.style.display == "none") {
            idobject.style.display = "block";
        } else {
            idobject.style.display = "none";
        }
    }
}