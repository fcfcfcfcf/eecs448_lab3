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



}