function randomImage(){
    var images = ['img/waves.jpg','img/grass.jpg',"img/metal.jpg","img/blossoms.jpg","img/dunes.jpg","img/puddle.jpg","img/white-rose.jpg","img/underwater.jpg",'img/dover.jpg','img/moon-mountain-background.jpg','img/mountain-background.jpg'];
    var size = images.length;
    var x = Math.floor(size*Math.random());
    console.log(x);
    var element = document.getElementsByClassName("background");
    console.log(element);
    element[0].style["background-image"] = "url(" + images[x]+")";
}
