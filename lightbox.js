// function to include html popup

function includeHtmlPopUp(){

    let html = '<div id="PopUp"><span id="close" onclick="closePopUp()"><img src="LightBox/Images/close1.png" alt=""></span><img id="right" src="LightBox/Images/right 1.png" alt=""><img id="left" src="LightBox/Images/left 1.png" alt=""><img id="mainPopUpImg" src="images/Macbook.jpg" alt=""></div>';

    let popdiv = document.createElement("div");

    popdiv.innerHTML = html;

    document.body.insertBefore(popdiv, document.body.firstChild);
}

// function to inite PopUp

let img;
let current;

function initePopUpImg(target){

    img = document.getElementsByClassName(target);
    
    for(let i = 0; i<img.length; i++){
        img[i].style.cursor = 'pointer';

        img[i].addEventListener('click', function(){
            document.getElementById("mainPopUpImg").src = this.src;
            document.getElementById("PopUp").style.display = 'block';
            checkArrow();
        });
    }

    includeHtmlPopUp();

    // next button
    document.getElementById("right").addEventListener('click', function(){
        nextImg();
    });

    // Prev button
    document.getElementById("left").addEventListener('click', function(){
        prevImg();
    });
}

// function to close PopUp

function closePopUp(){
    document.getElementById("mainPopUpImg").src = "";
    document.getElementById("PopUp").style.display = 'none';
}

// next image
function nextImg(){
    getCurrentImg();
    current ++;
    document.getElementById("mainPopUpImg").src = img[current].src;
    checkArrow()
}

// prev image
function prevImg(){
    getCurrentImg();
    current--;
    document.getElementById("mainPopUpImg").src = img[current].src;
    checkArrow();
}

function getCurrentImg(){
    for(let i = 0; i < img.length; i++){
        if(img[i].src == document.getElementById("mainPopUpImg").src){
            current = i;
        }
    }
}

function checkArrow(){
    getCurrentImg();
    if(current == "0"){
        document.getElementById("left").style.display = 'none';
        document.getElementById("right").style.display = 'block';
    } else if(current == img.length - 1){
        document.getElementById("right").style.display = 'none';
        document.getElementById("left").style.display = 'block';
    }else{
        document.getElementById("left").style.display = 'block';
        document.getElementById("right").style.display = 'block';
    }
}