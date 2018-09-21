


function validate(){
    var pw1 = document.getElementById("password1");
    var pw2 = document.getElementById("password2");
    var result = document.getElementById("resultMessage");
    if(pw1.length < 8 || pw2.lenth < 8){
        result.innerHTML = "Error: password must be at least 8 characters long!";
    }
    else if(pw1 === pw2){
        result.innerHTML = "Passwords match, good job!";
    }
    else{
        result.innerHTML = "Error: passwords do not match!";
    }
}