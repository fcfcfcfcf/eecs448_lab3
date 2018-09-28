
function updateScreen(){
    var borderG = document.getElementById("gborder");
    var borderR = document.getElementById("rborder");
    var borderB = document.getElementById("bborder");
    var width = document.getElementById("wborder");
    var backgroundG = document.getElementById("gback");
    var backgroundR = document.getElementById("rback");
    var backgroundB = document.getElementById("bback");
    
    var paragraph  = document.getElementById("openingParagraph");
    var body = document.getElementById("theBody");
    document.getElementById('theBody').style.backgroundColor = 'rgb(' + backgroundR.value + ',' + backgroundG.value + ',' + backgroundB.value + ')';
   
    paragraph.style.borderColor = 'rgb(' + borderR.value + ',' + borderG.value + ',' + borderB.value + ')'; 
    paragraph.style.width = width.value;
   



}

