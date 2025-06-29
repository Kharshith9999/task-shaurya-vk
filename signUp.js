window.onload = function() {
if(!localStorage.getItem("users")) {
    localStorage.setItem("users",JSON.stringify([]));
}
const togglePassword=document.getElementById("togglePassword");
if(togglePassword) {
    togglePassword.addEventListener("click", function () {
    const pwdInput = document.getElementById("pwd");
    const icon = document.getElementById("togglePasswordIcon");
    const isPassword = pwdInput.type === "password";
    pwdInput.type = isPassword ? "text" : "password";
    icon.classList.toggle("bi-eye");
    icon.classList.toggle("bi-eye-slash");
}); }
const toggleConPassword = document.getElementById("toggleConPassword");
if (toggleConPassword) {
    toggleConPassword.addEventListener("click", function () {
    const pwdInput = document.getElementById("conPwd");
    const icon = document.getElementById("toggleConPasswordIcon");
    const isPassword = pwdInput.type === "password";
    pwdInput.type = isPassword ? "text" : "password";
    icon.classList.toggle("bi-eye");
    icon.classList.toggle("bi-eye-slash");
});}
document.getElementById("signUp").addEventListener("click",mainFunc);
document.getElementById("resetBtn").addEventListener("click",forReset);
class user {
    constructor(fullName,email,pwd,conPwd){
    this.fullName=fullName;
    this.email=email;
    this.pwd=pwd;
}
}
function emailValidation(email) {
    const emailAsRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const popularDomains = ["gmail.com" , "yahoo.com" , "outlook.com"] ;
    const domain =email.split("@")[1].toLowerCase();
    if(!email) {
        return {valid:false , message:"Email Should not be Empty"}
    }
    if (!emailAsRegex.test(email)) {
        return { valid: false  , message:"Please Enter a Valid Email"};
    }
    if (!popularDomains.includes(domain)) {
        return {valid:false , message: "Please Use a Valid Domain Ex:gmail.... etc"};
    }
    return {valid:true};

}
function forReset() {
    document.getElementsByClassName("alertFullname")[0].innerHTML = "";
    document.getElementsByClassName("alertEmail")[0].innerHTML = "";
    document.getElementsByClassName("alertPwd")[0].innerHTML = "";
    document.getElementsByClassName("toAlert")[0].innerHTML = "";
}
function mainFunc(e){
    e.preventDefault();
    document.getElementsByClassName("alertFullname")[0].innerHTML = "";
    document.getElementsByClassName("alertEmail")[0].innerHTML = "";
    document.getElementsByClassName("alertPwd")[0].innerHTML = "";
    document.getElementsByClassName("toAlert")[0].innerHTML = "";
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const pwd = document.getElementById("pwd").value;
    const conPwd = document.getElementById("conPwd").value;
    const user1 = new user(fullName,email,pwd) ;
    let isValid=true;
    const isValidEmail = emailValidation(email);
    if(!fullName) {
        document.getElementsByClassName("alertFullname")[0].innerHTML="Full Name should not be empty";
        isValid=false
    }
    if(!isValidEmail.valid) {
        document.getElementsByClassName("alertEmail")[0].innerHTML=isValidEmail.message;
         isValid=false
    }
    if(!pwd) {
        document.getElementsByClassName("alertPwd")[0].innerHTML="Password should not be empty";
         isValid=false
    
    } else if (pwd.length<6) {
        document.getElementsByClassName("alertPwd")[0].innerHTML="Password must conntain atleast 6 characters!";
         isValid=false
    }
    if(pwd!==conPwd) {
         document.getElementsByClassName("toAlert")[0].innerHTML="Passwords Don't match";
        isValid=false
    }
    
    if(isValid)  {
        let users=JSON.parse(localStorage.getItem("users"));
        users.push(user1);
        localStorage.setItem("users",JSON.stringify(users));
        document.getElementsByClassName("toAlert")[0].style.color="green";
        document.getElementsByClassName("toAlert")[0].innerHTML="Sign Up Successful!";
        setTimeout( function () {window.location.href="signIn.html";} , 1000);
    }  
}
};