console.log("script.js is loaded");

// loadPage() function

function loadPage(pageID) {
    console.log("loadPage() is running");
    //move form one screen to another with history (bringPageTop)
    document.querySelector("#appNav").bringPageTop(pageID); 
}

// clearForm() function
function clearForm() {
    console.log("clearForm() is running");
    document.querySelector("#signEmail").value = "";
    document.querySelector("#signPassword").value = "";
    document.querySelector("#signPasswordConfirm").value = "";
}

//createAccount() function
function createAccount() {
    console.log("createAccount function is working");

    // read the data in the inputs
    let signEmailValue = document.querySelector("#signEmail").value;
    let signPasswordValue = document.querySelector("#signPassword").value;
    let signPasswordConfirmValue = document.querySelector("#signPasswordConfirm").value;

    // check if password match
    if(signPasswordValue !== signPasswordConfirmValue) {
        console.log("passwords DO NOT match");
        ons.notification.alert("Passwords don't match");
        // signEmailValue.value = "";
        // signPasswordValue.value = "";
        // signPasswordConfirmValue.value = "";
        // CLEAR VALUES FOR THE USER TO ENTER AGAIN THE RIGHT PASSWORDS
        document.querySelector("#signPassword").value = "";
        document.querySelector("#signPasswordConfirm").value = "";
    } else {
        console.log("Passwords match");
        let temporarySignEmail = signEmailValue.toLowerCase(),
        temporarySignPassword = signPasswordValue;

     //check is user account already exists
        if(localStorage.getItem(temporarySignEmail) === null) {
            console.log("new user detected");

         // save the new user
            localStorage.setItem(temporarySignEmail, temporarySignPassword);
            ons.notification.alert("You account has been created!");
            console.log("New user saved: " + temporarySignEmail);

        // clear inputs
            document.querySelector("#signEmail").value = "";
            document.querySelector("#signPassword").value = "";
            document.querySelector("#signPasswordConfirm").value = "";

     } else {
         console.log("Old user detected");
         ons.notification.alert("This email is already used in an account. You can just log in");
     }  // end if/else user account exists
    } // end if/else passwords match
} //end of conditional passwords match
    

    // logIn() function
    function logIn() {
        console.log("Login() function is working");
        
        //storing user entry data in variables
        let loginEmailValue = document.querySelector("#loginEmail").value;
        let loginPasswordValue = document.querySelector("#loginPassword").value;

        console.log(loginEmailValue, loginPasswordValue);

        let temporaryLoginEmail = loginEmailValue.toLowerCase();
        console.log(temporaryLoginEmail, loginPasswordValue);

        // check if account exists in localStorage
        if(localStorage.getItem(temporaryLoginEmail) === null) {
            console.log("Account does NOT exist");
            ons.notification.alert("This email is not register. Please, create an account first.")
        } else {
            console.log("Account does exist");
            // if/else to check passwords
            if(loginPasswordValue === localStorage.getItem(temporaryLoginEmail)) {
                console.log("Passwords DO march");
                // move to another page without leaving history
                document.querySelector("#appNav").resetToPage("homeCust.html");
                // clear inputs
                document.querySelector("#loginEmail").value = "";
                document.querySelector("#loginPassword").value = "";

            } else {
                console.log("Passwords DO NOT match");

            } // end  if/else passwords match
        } //end if/else account exists


    } //end of logIn() function

    //logOut() function
    function logOut() {
        console.log("logOut() function is working");
        //document.querySelector("#homeCust.html").resetToPage(document.querySelector("#appNav"));
        document.querySelector("#appNav").resetToPage("exit.html");

        //
        // const homeCust = document.querySelector("#homeCust.html");
        // 
        // window.location.replace(appNav);
               
    } // end logOut() function
