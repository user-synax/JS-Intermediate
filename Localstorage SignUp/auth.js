// Email validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Password strength (min 8 chars, letter + number)
function isStrongPassword(password) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

// Hash password
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

// Get users from localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// Save users
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// ================== SIGN UP ==================

async function signup() {
    const email = signupEmail.value.trim();
    const password = signupPassword.value.trim();
    const msg = document.getElementById("signupMsg");

    if (!email || !password) {
        msg.textContent = "❌ All fields are required";
        return;
    }

    if (!isValidEmail(email)) {
        msg.textContent = "❌ Invalid email format";
        return;
    }

    if (!isStrongPassword(password)) {
        msg.textContent = "❌ Password must be 8+ chars with letters & numbers";
        return;
    }

    const users = getUsers();

    if (users.find(user => user.email === email)) {
        msg.textContent = "❌ Email already registered";
        return;
    }

    const hashedPassword = await hashPassword(password);

    users.push({ email, password: hashedPassword });
    saveUsers(users);

    msg.textContent = "✅ Signup successful!";
    signupEmail.value = signupPassword.value = "";
}

// ================== LOGIN ==================

async function login() {
    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();
    const msg = document.getElementById("loginMsg");

    if (!email || !password) {
        msg.textContent = "❌ All fields are required";
        return;
    }

    if (!isValidEmail(email)) {
        msg.textContent = "❌ Invalid email format";
        return;
    }

    const users = getUsers();
    const user = users.find(user => user.email === email);

    if (!user) {
        msg.textContent = "❌ User not found";
        return;
    }

    const hashedPassword = await hashPassword(password);

    if (hashedPassword !== user.password) {
        msg.textContent = "❌ Wrong password";
        return;
    }

    msg.textContent = "✅ Login successful!";
}