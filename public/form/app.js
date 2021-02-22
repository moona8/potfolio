// this will show password on clicling the check box.
function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// calling all the elements
var fName = document.getElementById("firstName");
var fnameError = document.getElementById("fnameError");
var lname = document.getElementById("lastName");
var lnameError = document.getElementById("lnameError");
var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
var email = document.getElementById("email");
var password = document.getElementById("password");
var perror = document.getElementById("perror");
var number = document.getElementById("number");
var contactError = document.getElementById("contactError");
var ContactRegex = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
var arr = new Array();
//  validation
const validateInput = () => {
    try {
        /// first name
        if (this) {
            if (fName.value) {
                if (fName.value.length < 3) {
                    fnameError.innerHTML = "first name should not be less than 3 letters.";
                } else {
                    fnameError.innerHTML = "";
                }
            } else {
                fnameError.innerHTML = " Enter first name";

            }
            /// last name
            if (lname.value) {
                if (lname.value.length < 3) {
                    lnameError.innerHTML = "last name should not be less than 3 letters.";
                } else {
                    lnameError.innerHTML = "";
                }
            } else {
                lnameError.innerHTML = " Enter last name";
            }
            // email
            if (email.value) {
                if (emailRegex.test(email.value)) {
                    emailError.innerHTML = "";
                } else {
                    emailError.innerHTML = "Invalid Email";
                }
            } else {
                emailError.innerHTML = "Please input any email";
            }
        }

        //contact no
        if (number.value) {
            if (ContactRegex.test(number.value)) {
                contactError.innerHTML = "";
            } else {
                contactError.innerHTML = "Invalid number";
            }
        } else {
            contactError.innerHTML = "Enter Number";
        }

        //password
        if (password.value) {
            if (password.value.length < 5) {
                perror.innerHTML = "password length must be 4";
            } else {
                perror.innerHTML = "";
            }
        } else {
            perror.innerHTML = " Enter password";
        }
    } catch (error) {
        alert(error);
    }
}; //  validation end here
var RegisterUser = () => {
    console.log(fName.value);
    console.log(lname.value);
    console.log(email.value);
    console.log(number.value);
    console.log(password.value);
    addData();

    //storing the data from registration form

}





function addData() {
    getData();
    var userData = {
        firstName: fName.value,
        lastName: lname.value,
        UserEmail: email.value,
        UserContact: number.value,
        UserPassword: password.value,
    }
    arr.push(userData)
    localStorage.setItem("registration", JSON.stringify(arr));
}

// now saving and retrieving the user data =================================================================

function getData() {
    var str = localStorage.getItem("registration");
    if (str != null)
        arr = JSON.parse(str);
}
getData();
var tbl = document.getElementById("tbody");
for (var i = 0; i < arr.length; i++) {
    var r = tbl.insertRow();
    var cell1 = r.insertCell();
    var cell2 = r.insertCell();
    var cell3 = r.insertCell();
    var cell4 = r.insertCell();
    var cell5 = r.insertCell();
    cell1.innerHTML = arr[i].firstName;
    cell2.innerHTML = arr[i].lastName;
    cell3.innerHTML = arr[i].UserEmail;
    cell4.innerHTML = arr[i].UserContact;
    cell5.innerHTML = arr[i].UserPassword;
}



