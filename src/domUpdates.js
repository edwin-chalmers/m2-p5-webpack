const infoDiv = document.getElementById('info')
const finalCostDiv = document.getElementById('finalCost')

function displayPastTrips(tripDates, tripLocations) {
    tripDates.forEach((date, i) => {
        infoDiv.innerHTML += `<p>${i+1}. ${tripLocations[i].destination} // ${date}</p>`
    })
}

function displayFinalCost(finalCost) {    
    finalCostDiv.innerText = `$${finalCost}` 
}

export {
    displayPastTrips,
    displayFinalCost
}