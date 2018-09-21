function changeSlideshow(direction){
    
    var display = document.getElementById("display");
    var imgCounter = 0;
    if(direction === "left"){
        imgCounter = imgCounter + 1;
        if(imgCounter > 4){
            imgCounter = 0;
        }
    }
    else if (direction === "right"){
        imgCounter = imgCounter - 1;
        if(imgCounter < 0){
            imgCounter = 4;
        }
    }

    if(imgCounter === 0){
        display.src = "/pictures_of_thomas/THOMAS.jpg";
    }
    else if (imgCounter === 1){
        display.src =  "/pictures_of_thomas/THOMAS_butblackandwhite.jpg";
    }
    else if (imgCounter === 2){
        display.src = "/pictures_of_thomas/THOMAS_buthesawizard.jpg";;
    }
    else if (imgCounter === 3){
        display.src = "/pictures_of_thomas/THOMAS_butspooky";
    }
    else if (imgCounter === 4){
        display.src = "/pictures_of_thomas/THOMAS_butwithabluemustache.jpg";
    }


}