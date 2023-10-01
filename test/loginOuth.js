var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

// Get the values entered by the user
var emailValue = emailInput.value;
var passwordValue = passwordInput.value;

// Now you can use emailValue and passwordValue as needed, for example, you can log them to the console
console.log("Email: " + emailValue);
console.log("Password: " + passwordValue);

// You can also perform further actions such as sending the data to a server for validation, etc.
// Get the login button element by its ID
var loginButton = document.getElementById("loginButton");

// Add a click event listener to the login button
loginButton.addEventListener("click", function() {
    // Get the input values
    var emailValue = document.getElementById("email").value;
    var passwordValue = document.getElementById("password").value;

    // Check if the email and password match the specified values
    if ((emailValue === "emildacarpenter22@gmail.com" && passwordValue === "Carpenter321@1") ) {
        // Redirect to the "Account.html" page
        window.location.href = "./account.html";
    } 
    else {
        // Display an error message or take appropriate action for invalid credentials
        alert("Invalid email or password. Please try again.");
    }
});
