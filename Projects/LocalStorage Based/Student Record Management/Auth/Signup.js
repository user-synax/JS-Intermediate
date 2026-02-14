let formContainer = document.getElementById("signup")
let username = formContainer["username"]
let email = formContainer["email"]
let password = formContainer["password"]
let button = document.getElementById("signUpButton")
const dialog = document.getElementById("login")

// Login Elements

let loginForm = document.getElementById("loginForm")
let loginUsername = loginForm["loginUsername"]
let loginPassword = loginForm["loginPassword"]
let loginButton = document.getElementById("loginButton")


const createAccount = () => {
    if (username.value.trim() == "" && email.value.trim() == "" || password.value.trim() == ""){
        alert("Please fill all the fields")
    }else {
        localStorage.setItem(username.value.trim(), password.value.trim())
    }
}

const checkAccount = () => {
    Auth = {}
    for (users = 0; users < localStorage.length; users++){
        let key = localStorage.key(users)
        let value = localStorage.getItem(key)
        Auth[key] = value
    }
    console.log(Auth);
    let username = loginUsername.value.trim()
    let LogPassword = loginPassword.value.trim()
    if(loginUsername.value.trim() == Object.keys(Auth).includes(username)){
        alert("Invalid Username")
    } else if ( loginPassword.value.trim() == Object.values(Auth).includes(LogPassword)){
        alert("Invalid Password")
    } else{
        alert("Login Successfull")
    }
}

button.addEventListener("click", createAccount)
loginButton.addEventListener("click", checkAccount)