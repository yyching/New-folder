
//validation for login form
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');

    } else {
        setSuccess(password);
    }

};

//create an account object
class Account {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

//create an array to store account
let userAccount = [];

loadAccount();

//retrieve accounts from local storage
function loadAccount() {
    const storedUserAccount = localStorage.getItem('userAccount');
    if (storedUserAccount) {
        userAccount = JSON.parse(storedUserAccount);
    }
}


const loginForm = document.getElementById('form');
const loginUsername = document.getElementById('username');
const loginPassword = document.getElementById('password');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    loadAccount();

    const enteredUsername = loginUsername.value;  // Use loginUsername instead of username
    const enteredPassword = loginPassword.value;  // Use loginPassword instead of password

    let found = false;

    // Loop through the userAccount array to find a matching account
    for (const account of userAccount) {
        if (account.username === enteredUsername && account.password === enteredPassword) {
            found = true;
            break;
        }
    }
    
    if (found) {
        alert('Login successful!');
        const loginAccount = {
            loginusername: enteredUsername,
            loginpassword: enteredPassword,
        }

        // Convert the object to JSON
        const loginAccountJSON = JSON.stringify(loginAccount);

        // Store the JSON string in local storage
        localStorage.setItem('loginAccount', loginAccountJSON);
        window.location.href = 'member.html';
    } else {
        alert('Login failed. Invalid credentials.');
    }
});

