// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import {} from './domUpdates'


var username = document.getElementById('username')
var password = document.getElementById('pass')
var login = document.getElementById('login')

login.addEventListener("click", () => {
    // var username = document.getElementById('username').value;
    // var password = document.getElementById('pass').value;
    console.log(username.value)
    console.log(password.value)
    username.value = ''
    password.value = ''
})

document.addEventListener("DOMContentLoaded", () => {
    username.value = ''
    password.value = ''
})

function parseUserId(username) {
    return Number(username.replace('traveler', ''))
}
