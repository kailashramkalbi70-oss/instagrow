document.addEventListener("DOMContentLoaded",()=>{

const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",(e)=>{

e.preventDefault();

const name =
document.getElementById("registerName").value.trim();

const email =
document.getElementById("registerEmail").value.trim();

const password =
document.getElementById("registerPassword").value;

const confirm =
document.getElementById("confirmPassword").value;

if(password !== confirm){

alert("Passwords do not match.");
return;

}

const users =
JSON.parse(localStorage.getItem("users") || "[]");

if(users.some(u=>u.email===email)){

alert("Email already registered.");
return;

}

users.push({
name,
email,
password
});

localStorage.setItem(
"users",
JSON.stringify(users)
);

localStorage.setItem(
"pendingEmail",
email
);

alert("Account created. Please verify OTP.");

location.href="verify-otp.html";

});

}


const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

const users =
JSON.parse(localStorage.getItem("users") || "[]");

const user =
users.find(
u=>u.email===email && u.password===password
);

if(!user){

alert("Invalid email or password.");
return;

}

localStorage.setItem(
"currentUser",
JSON.stringify(user)
);

alert("Login successful.");

location.href="dashboard.html";

});

}


const otpForm =
document.getElementById("otpForm");

if(otpForm){

otpForm.addEventListener("submit",(e)=>{

e.preventDefault();

const otp =
document.getElementById("otp").value;

if(otp !== "123456"){

alert("Invalid OTP.");
return;

}

alert("Email verified successfully.");

location.href="login.html";

});

}

});


function logout(){

localStorage.removeItem("currentUser");

location.href="index.html";

}
