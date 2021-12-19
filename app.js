$(document).ready(function(){
    let pageWidth=document.querySelector("body").clientWidth;
    let pageHeight=document.querySelector("body").clientHeight;

    // to create inside of each corner square a border of blue by mouse movement
    $(".board .corner").on("mouseenter", function(){
        $(this).html('<div class="hoverSquare"></div>');
    });
    $(".board .corner").on("mouseleave", function(){
        $(".hoverSquare").remove();
    });

    // mouse movement on div.board
    $(".frame").mousemove(function(event){
        let pageCoords = [event.pageX , event.pageY];
        let xPosition=(pageCoords[0]/pageWidth)*100;
        let yPosition=(pageCoords[1]/pageHeight)*100;

        if(xPosition>65){
            xPosition=65;
        }else if(xPosition<35){
            xPosition=35;
        };
        if(yPosition>70){
            yPosition=70;
        }else if(yPosition<40){
            yPosition=40;
        };

        $(".circle .square .mask").css({"left" :xPosition + "%"});
        $(".circle .square .mask").css({"top" :yPosition + "%"});

    })
});