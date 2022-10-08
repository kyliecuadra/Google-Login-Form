// Disabling enter key for submitting form
document.getElementById("myForm").onkeypress = function(e) {
  var key = e.charCode || e.keyCode || 0;     
  if (key == 13) {
    e.preventDefault();
  }
}

// Declaring login credentials
var login = {
	username: "username",
	password: "password"
};

// Initializing input fields, labels, and button
const usernameInput = document.getElementById("username");
const usernameLabel = document.getElementById("usernameLabel");
const passwordInput = document.getElementById("password");
const passwordLabel = document.getElementById("passwordLabel");

const loginBtn = document.getElementById("loginBtn");
const crazyLoginBtn = document.getElementById('crazy_loginBtn');

// Checking the device that the user is using
const isMobile = navigator.userAgentData.mobile;

// Declaring variables for checking login credentials
let username;
let password;

// Randomizing submit buttons
randomNum= Math.floor((Math.random() * 100) + 1);
if(randomNum % 2 == 0 && isMobile == true){
	loginBtn.style.display = "block";
}
else{
	crazy_loginBtn.style.display = "block";
}

// Checking username input if its valid and storing it to the username variable
usernameInput.addEventListener('input', () =>{
	if(usernameInput.value == ''){
		usernameInput.style.borderColor = "#1A73E8";
		usernameLabel.style.color = "#1A73E8";
	}
	else if(usernameInput.value != login.username){
		usernameInput.style.borderColor = "red";
		usernameLabel.style.color = "red";
	}
	else {
		usernameInput.style.borderColor = "green";
		usernameLabel.style.color = "green";
		
	}
	username = usernameInput.value;
	return true;
});

// Checking password input if its valid and storing it to the password variable
passwordInput.addEventListener('input', () => {
	if(passwordInput.value == ''){
		passwordInput.style.borderColor = "#1A73E8";
		passwordLabel.style.color = "#1A73E8";
	}
	else if(passwordInput.value != login.password){
		passwordInput.style.borderColor = "red";
		passwordLabel.style.color = "red";
	}
	else {
		passwordInput.style.borderColor = "green";
		passwordLabel.style.color = "green";
	}
	password = passwordInput.value;
	return true;
});


// Displaying sign in button if the username and password are valid
setInterval(function(){
	if(username != login.username || password != login.password){
		loginBtn.style.visibility = "hidden";
	}
	else {
		loginBtn.style.visibility = "visible";
	}
},1)


// Crazy comment
crazyLoginBtn.addEventListener('mouseover', function () {
    crazyLoginBtn.style.left = `${Math.ceil(Math.random() * 90)}%`;
    crazyLoginBtn.style.top = `${Math.ceil(Math.random() * 90)}%`;
});
