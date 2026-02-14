// Sign up DOM
let userSignUpEmail = document.getElementById("signUpUsername")
let userSignUpPassword = document.getElementById("signUpPassword")
let userSignUpPasswordRepeat = document.getElementById("signUpPasswordRepeat")
let SignUpStatus = document.querySelector('.signUpStatus')


// Login DOM
let loginUsername = document.getElementById("loginUsername")
let loginPassword = document.getElementById("loginPassword")
let loginStatus = document.querySelector('.loginStatus')

let credentials = {}

const checkEmail = () => {
    let userEmail = userSignUpEmail.value.trim()
    if (userSignUpEmail.value.trim() == "") {
        SignUpStatus.textContent = "Please Enter Your Email"
    } else if (userEmail.length < 12) {
        SignUpStatus.textContent = "Very Short Email"
    }
    else if (!userEmail.includes("@")) {
        SignUpStatus.textContent = "Please enter Valid email with '@' init"
    } else {
        credentials.username = userEmail
    }
    setTimeout(() => { SignUpStatus.textContent = "" }, 3000)
}

const checkPassword = () => {
    let userPassword = userSignUpPassword.value.trim()
    if (userSignUpPassword.value.trim() === "") {
        SignUpStatus.textContent = "Please Set a Password"
    } else if (userSignUpPassword.value.trim() != userSignUpPasswordRepeat.value.trim()) {
        SignUpStatus.textContent = "Password Didn't Match, Check Your Password"
    } else if (userPassword.length < 8) {
        SignUpStatus.textContent = "Password must be 8+ chars"
    }
    else {
        credentials.password = userPassword
    }
    setTimeout(() => { SignUpStatus.textContent = "" }, 3000)
}

const fetchData = () => {
    let RegisterdUsers = 0
    for (let i = 0; i < localStorage.length; i++) {
        RegisterdUsers += i
        loginStatus.textContent = `Total Registerd users: ${RegisterdUsers}`
    }
}

const signUp = () => {
    checkPassword()
    checkEmail()
    if (credentials.username != undefined && credentials.password != undefined) {
        localStorage.setItem(credentials.username, credentials.password)
        SignUpStatus.textContent = "Registration Succesfull, You can Login Now"
        userSignUpEmail.value.trim() = ""
    }
}

const login = () => {
    let userEmail = localStorage.key(loginUsername.value.trim())
    let userPassword = localStorage.getItem(userEmail)


    if (loginUsername.value.trim() == "") {
        loginStatus.textContent = "Please Enter Your Email"
    } else if (loginPassword.value.trim() == "") {
        loginStatus.textContent = "Please Enter Your Password"
    }
    else if (loginUsername.value.trim() != userEmail) {
        loginStatus.textContent = "Invalid Email, please Recheck your Email"
    } else if (loginPassword.value.trim() != userPassword) {
        loginStatus.textContent = "Wrong Password"
    } else {
        loginStatus.textContent = "Login Succesfull"
    }

    setTimeout(() => { loginStatus.textContent = "" }, 3000)
}