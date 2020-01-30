let module.exports = {
    toggleUI: function(id) {
        if(document.getElementById(id).style.display == "none") {
            document.getElementById(id).style.display = "block";
        } else {
            document.getElementById(id).style.display = "none";
        }
    }
}