window.onload = function(){
    var colors = ["#fff","#aaa", "#888", "#555", "#222"];
    var links = document.getElementsByTagName('a');
    var p = document.getElementsByTagName('p');

    p[0].style.color = "#fff";
    for(var i=0;i<links.length;i++){
        links[i].style.textDecoration = "none";
        links[i].style.color = "#fff";
    }
    var body = document.getElementsByTagName("body");
    body[0].style.background = "#036";



    function createDivs(colors,nodes){
        //colors is a list of colors(i.e. how many )
        var body = document.getElementsByTagName("body");
        for(var i=0;i<colors.length;i++){
            //creates the outer div tag then adds a class
            var divn = document.createElement("div");
            divn.setAttribute("class",'l'+(i+1));

            body[0].appendChild(divn);
            console.log("adding nested divs");
            for(var j=0;j<nodes;j++){
                var innerdiv = document.createElement("div");
                innerdiv.setAttribute("class","innerdiv");
                divn.appendChild(innerdiv);
            }
        }
    }
    createDivs(colors,150);

    function modifyDivs(colors,nodes){
        for(var i=0; i<colors.length;i++){
            var divtag = document.getElementsByClassName("l"+(i+1));
            var innerdivs = divtag.getElementById("innerdiv");
            for(var j=0;j<innerdivs.length;j++){
                innerdivs[i].style.width = "4500px";
                innerdivs[i].style.height = "90%";
                innerdivs[i].style.position = "absolute";
                innerdivs[i].style.left = "50%";
                innerdivs[i].style.webkitTransform = "translateX(-50%)";
                innerdivs[i].style.transform = "translateX(50%)";

            }
            var hasparentdiv = document.get
        }
    }
    //	body.style.background = "#036";
        /*
        for (var i = 0; i < colors.length; i++) {
            var divtag = document.getElementsByClassName(sprintf("l%(d)",i+1))
            divtag.style.setAttribute('width','4500px');
            divtag.style.setAttribute('height','90%');
            divtag.style.setAttribute('position','absolute');
            divtag.style.setAttribute('left','50%');
            divtag.style.setAttribute('-webkit-transform','-50%');
            divtag.style.setAttribute('transform','-50%');
            colors[i]
        }
        document.getElementById('width','4500px');
        */
};
