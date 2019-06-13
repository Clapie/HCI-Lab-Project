function validate(){
    //alert("Hello");
    if(!checkEmail()) return false;
    if(!checkPassword()) return false;
    if(!checkAddress()) return false;
    if(!checkGender()) return false;
    if(!checkDOB()) return false;

    return true;
}


function checkAddress(){
    if(document.getElementById("address").value==""){
        alert("Address must be filled");
        return false;
    }
    return true;
}
function checkGender(){
    if(!document.getElementById("male").checked && !document.getElementById("female").checked){
        alert("Gender must be choosen");
        return false;
    }
    return true;
}

function checkDOB(){
    var date = document.getElementById("dob").value;
    var varDate = new Date(date); //dd-mm-YYYY
    var today = new Date();
    if(date==""){
        alert("Date of birth must be filled");
    }
    if(varDate > today){
        alert("Date of birth cannot be greater than current date");
        return false;
    }
    return true;
}

function checkPassword(){
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if(password.length < 8){
        alert("Password must have 8 characters minimum");
        return false;
    }

    if(password != confirmPassword){
        alert("Password didn't match");
        return false;
    }

    return true;
}

function checkEmail(){
    if(document.getElementById("email").value==""){
        alert("Email must be filled");
        return false;
    }

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value))){
        alert("You have entered invalid email address");
        return false;
    }
    return true;
}