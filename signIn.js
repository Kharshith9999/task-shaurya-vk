window.onload = function () {
    document.getElementById("toggleInPassword").addEventListener("click", function () {
    const pwdInput = document.getElementById("pwd");
    const icon = document.getElementById("toggleInPasswordIcon");
    const isPassword = pwdInput.type === "password";
    pwdInput.type = isPassword ? "text" : "password";
    icon.classList.toggle("bi-eye");
    icon.classList.toggle("bi-eye-slash");
});
document.getElementById("resetBtn").addEventListener("click",forReset);
document.getElementById("signIn").addEventListener("click",mainFunc)
function mainFunc(e) {
    e.preventDefault();
    document.getElementsByClassName("alertEmail")[0].innerHTML = "";
    document.getElementsByClassName("alertPwd")[0].innerHTML = "";
    const email = document.getElementById("email").value.trim();
    const pwd = document.getElementById("pwd").value;
    let isValid=true;
    if(!pwd) {
        document.getElementsByClassName("alertPwd")[0].innerHTML="Password should not be empty";
         isValid=false
    
    } else if (pwd.length<6) {
        document.getElementsByClassName("alertPwd")[0].innerHTML="Your Password will conntain atleast 6 characters!";
         isValid=false
    }
    if (isValid) {
       let users= JSON.parse(localStorage.getItem("users"));
       let NoOfUsers= users.length ;
       for(let i=0; i<NoOfUsers;i++) {
        if (users[i].email===email && users[i].pwd===pwd) {
             document.getElementsByClassName("alertPwd")[0].style.color="green";
            document.getElementsByClassName("alertPwd")[0].innerHTML="Login Successful!";
            setTimeout( function () {window.location.href="final.html?email="+users[i].email;} , 1000);
             return;
        }
    }
    for(let i=0; i<NoOfUsers;i++) {
         if (users[i].email!=email) {
            document.getElementsByClassName("alertEmail")[0].innerHTML="Please Enter Your Registered Email";
        }
    }
       
            document.getElementsByClassName("alertPwd")[0].innerHTML="Password is Incorrect";
            document.getElementsByClassName("alertPwd")[0].innerHTML="Please Enter Correct Credentials";
       }
    }
}
function forReset() {
    document.getElementsByClassName("alertEmail")[0].innerHTML = "";
    document.getElementsByClassName("alertPwd")[0].innerHTML = "";
    document.getElementsByClassName("toAlert")[0].innerHTML = "";
}
