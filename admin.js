const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

//create an account object
class Account {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

//create an array to store account
let userAccount = [];

//retrieve account
loadAccount();

// Store the JSON string in local storage
function saveAccount() {
    localStorage.setItem('userAccount', JSON.stringify(userAccount));
}

//retrieve accounts from local storage
function loadAccount() {
    const storedUserAccount = localStorage.getItem('userAccount');
    if (storedUserAccount) {
        userAccount = JSON.parse(storedUserAccount);
    }
}

//add an account
function addAccount(username, password) {
    const account = new Account(username, password);
    userAccount.push(account);
    saveAccount();
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateInputs();

    // Check if all input fields are successful
    const inputControls = form.querySelectorAll('.form');
    let allInputsValid = true;

    //check for each input
    inputControls.forEach(inputControl => {
        if (!inputControl.classList.contains('success')) {
            allInputsValid = false;
        }
    });

    if (allInputsValid) {
        //save data
        alert("Succesfully register.You can login to our site now.");
        addAccount(username.value, password.value);

        // Refresh the page after the user clicks OK on the alert
        //window.location.reload();
    }

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


    //check that input is not empty
    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
};