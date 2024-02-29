// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import {} from './domUpdates'
import {fetchData} from './apiCalls'


var username = document.getElementById('username')
var password = document.getElementById('pass')
var login = document.getElementById('login')

login.addEventListener("click", () => {
    console.log(username.value)
    console.log(password.value)
    getTrips('trips', parseUserId(username.value))

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

function sortDataById(data, userId) {
    return data[0].trips.filter(data => data.userID === userId)
}

function getTrips(data, userId) {
    Promise.all([fetchData(`${data}`)])
    .then(trips => {
        console.log('getTrips()', sortDataById(trips, userId))
        sortDataById(trips, userId)
    })
    .catch(error => console.error("Error loading data:", error));
}

