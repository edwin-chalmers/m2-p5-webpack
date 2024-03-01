// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
// import {displayPastTrips} from './domUpdates'
import {fetchData} from './apiCalls'

var username = document.getElementById('username')
var password = document.getElementById('pass')
var login = document.getElementById('login')
const loginBox = document.getElementById('loginBox')
const pastTrips = document.getElementById('pastTrips')

// ------- Login ------- //

login.addEventListener("click", () => {
    console.log(username.value)
    console.log(password.value)
    // getTrips('trips', parseUserId(username.value))
    getTripData(parseUserId(username.value))
    loginBox.classList.add('hidden')
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
    return data.trips.filter(data => data.userID === userId)
}

// function getTrips(data, userId) {
//     Promise.all([fetchData(`${data}`)])
//     .then(trips => {
//         // --- past trips 
//         let chronologicalDates = sortDataById(trips, userId).map(trip => trip.date).sort((a, b) => new Date(b) - new Date(a))
//         sortDataById(trips, userId)
        
//         // --- dom updates
//         displayPastTrips(chronologicalDates)
        


//         console.log('getTrips()', sortDataById(trips, userId))
//         console.log('final cost',sortDataById(trips, userId))
//     })
//     .catch(error => console.error("Error loading data:", error));
// }

function getTripData(userId) {
    Promise.all([fetchData('trips'), fetchData('destinations')])
    .then(([trips, destinations]) => {
        // --- past trips 
        let chronologicalDates = sortDataById(trips, userId).map(trip => trip.date).sort((a, b) => new Date(b) - new Date(a))
        let tripList = sortDataById(trips, userId)
        let tripLocations = getDestinationsByIds(destinations, tripList)
        
        // --- dom updates
        displayPastTrips(chronologicalDates, tripLocations)
        
        
        console.log('destinations',destinations.destinations)
        console.log('sortDataById()', sortDataById(trips, userId))
        console.log('getDestinationsByIds', getDestinationsByIds(destinations, tripList))
        // console.log('final cost',sortDataById(trips, userId))
    })
    .catch(error => console.error("Error loading data:", error));
}

function getDestinationsByIds(data, destIds) {
    let destArray = []
    destIds.forEach(id => {
        data.destinations.forEach(dest => {
         if (dest.id === id.destinationID) {
            destArray.push(dest)
         }
        })
    })
    return destArray
}



function displayPastTrips(tripDates, tripLocations) {
    tripDates.forEach((date, i) => {
        pastTrips.innerHTML += `<p>${i+1}. ${tripLocations[i].destination} - ${date}</p>`
    })
}

getTripData(parseUserId('27'))
