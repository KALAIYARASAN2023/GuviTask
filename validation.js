// REGISTRATION VALIDATION
var mailError = document.getElementById("mailError");
var phoneError = document.getElementById("phoneError");

var submitValidate = false;

function userNameValidate() {
    var user = document.getElementById("usernames");
    var nameError = document.getElementById("nameError");
    var usernameValidate = "^[A-Za-z]+$";

    if (!user.value.match(usernameValidate)) {
        nameError.innerHTML = "UserName Must be Only Aplhabets";
        document.getElementById("usernames").style.border = "2px solid #8B0000";
        return false;
    }
    document.getElementById("usernames").style.border = "2px solid 	#089000";
    nameError.innerHTML = "";
    return true;
}

function mailValidate() {
    var mail = document.getElementById("mailid");
    var mailValidate = "^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$";

    if (!mail.value.match(mailValidate)) {
        mail.style.border = "2px solid #8B0000";
        mailError.innerHTML = "Enter Valid Mail Address";
        return false;
    }
    mail.style.border = "2px solid #089000";
    mailError.innerHTML = "";
    return true;
}

function phoneValidate() {
    var mobile = document.getElementById("mobilenumber");
    var phoneValidate = "^[6-9]{1}[0-9]{9}$";

    if (!mobile.value.match(phoneValidate)) {
        mobile.style.border = "2px solid #8B0000";
        phoneError.innerHTML = "Enter Valid Phone Number";
        return false;
    }
    mobile.style.border = "2px solid #089000";
    phoneError.innerHTML = "";
    return true;
}

function passwordValidate() {
    var password = document.getElementById("password");
    var confirmpassword = document.getElementById("confirmpassword");
    if (password.value == confirmpassword.value) {
        password.style.border = "2px solid #089000";
        confirmpassword.style.border = "2px solid #089000";

        document.getElementById("passwordError").innerHTML = "";
        return true;
    } else {
        password.style.border = "2px solid #8B0000";
        confirmpassword.style.border = "2px solid #8B0000";

        document.getElementById("passwordError").innerHTML = "Password Not Matched";
        return false;
    }
}


function validated() {
    var successRegistered = document.getElementById("registeredSuccessfulModal");


    if (userNameValidate() && mailValidate() && phoneValidate() && passwordValidate()) {

       document.getElementById("successfulMessage").innerHTML = "Login Successfull";
        return false;
    } else {
        alert("Enter Valid Data");
        return false;
    }
}

