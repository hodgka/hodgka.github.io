window.onload = choosePic;

var pictures = new Array("img/dover.jpg","img/moon-mountain-background.jpg","img/mountain-background.jpg");

function choosePic() {

     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("minitron").style.backgroundImage = "url('" + pictures[randomNum] + "')";


function surprise(cb) {
    (function loop() {
        var now = new Date();
        if (now.getDate() === 12 && now.getHours() === 12 && now.getMinutes() === 0) {
            cb();
        }
        now = new Date();                  // allow for time passing
        var delay = 60000 - (now % 60000); // exact ms to next minute interval
        setTimeout(loop, delay);
    })();
}

surprise(choosePic());