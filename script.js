
var exports = document.getElementById("exports");
var menuBtn = document.getElementById("menuBtn");
var body = document.getElementById("body");

function viewMenu(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    exports.classList.toggle("active");
    menuBtn.classList.toggle("active");
    setTimeout(() => {
        body.classList.toggle("active");
    }, 400);
}