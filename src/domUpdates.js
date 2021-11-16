import { currentTraveler, trips, destinations, travelerRepo, getAPICalls, buildTraveler } from './scripts.js';
import dayjs from 'dayjs';
import MicroModal from 'micromodal';

const validateLogin = () => {
  let parsedID;
  if (userName.value.includes('traveler') && password.value === 'travel') {
    loginError.text = ``;
    let userID = userName.value.replace('traveler', '');
    parsedID = parseInt(userID)
  } else {
    loginError.innerText = `Username and password not recognized! Please try again.`
  }
  if (parsedID > 0 && parsedID <= 50) {
    buildTraveler(travelerRepo.dataset[parsedID - 1]);
    updateDOM(currentTraveler, trips, destinations);
    showMainPage();
  } else {
    loginError.innerText = `Username and password not recognized! Please try again.`
  }
}

const showMainPage = () => {
  pageSpacer.classList.toggle("hidden");
  mainPage.classList.toggle("hidden");
  loginSection.classList.toggle("hidden");
}

const signOutUser = () => {
  travelerGreeting.innerText = `TRAVEL TRACKER`;
  totalTravelCosts.innerHTML = '';
  userName.value = '';
  password.value = '';
  showMainPage();
  clearTripGrid();
}

const updateDOM = (currentTraveler, trips, destinations) => {
  buildTravelCardGrid(currentTraveler, trips, destinations);
  addTripRequestCard(currentTraveler, trips, destinations);
  displayGreeting(currentTraveler);
  displayYTDCosts(currentTraveler, trips, destinations);
  populateDestinationSelector(destinations);
};

const clearTripGrid = () => {
  tripGrid.innerHTML = ``;
}

const displayGreeting = (currentTraveler) => {
  let greeting = `Welcome, ${currentTraveler.name}!`
  travelerGreeting.innerText = greeting.toUpperCase();
}

const displayYTDCosts = (currentTraveler, trips, destinations) => {
  totalTravelCosts.innerHTML = '';
  let totalCosts = trips.calculateTravelCostYTD(currentTraveler.id, destinations);
  let costCurrency = Number.parseInt(totalCosts).toFixed(2);
  totalTravelCosts.innerHTML += `Total travel costs this year: <br> $${costCurrency}`
}

const buildTravelCardGrid = (currentTraveler, trips, destinations) => {
  let userTrips = trips.getAllUserTrips(currentTraveler.id);
  userTrips.forEach((trip) => {
    const destination = destinations.getDataByID(trip.destinationID);
    const lodgingCosts = destinations.getTotalLodgingCosts(destination[0].id, trip.duration);
    const flightCosts = destinations.getTotalFlightCosts(destination[0].id, trip.travelers);
    const destinationImage = destination[0].image;
    const tripEnd = dayjs(trip.date).add(trip.duration, 'day').format('YYYY/MM/DD');
    let pendingNotice = ``;
    if (trip.status === 'pending') {
      pendingNotice = `PENDING`
    }
    tripGrid.innerHTML += `<article class="trip-card" tabindex="0">
          <div class="destination-photo" style="background-image: url(${destinationImage});">
              <p class="trip-shader">
              <p class="${pendingNotice}">${pendingNotice}
              <h1 class="destination-name">${destination[0].destination}</h1>
              <p class="trip-dates">${trip.date} - ${tripEnd}</p>
          </div>
          <div class="trip-info">
            <h2>COSTS:</h2>
            <p class="total-costs">TOTAL: $${lodgingCosts + flightCosts}</p>
            <p class="lodging-costs">Lodging: $${lodgingCosts}</p>
            <p class="trip-costs">Flight: $${flightCosts}</p>
            <h3>Suggested activities:</h3>
            <p>${trip.suggestedActivities}</p>
          </div>
      </article>`
  })
}

const addTripRequestCard = () => {
  tripGrid.innerHTML += `<article class="trip-card" id="planTripCard" data-micromodal-trigger="modal-1" tabindex='0'>
      <div class="destination-photo" style="background-image: url('./images/earthfromspace.jpg');">
        <p class="trip-shader">
        <h1 class="destination-name next-adventure">Your next adventure!</h1>
      </div>
      <div class="new-trip-button" id="newTripButton">
        <img src="./images/old-compasses.svg" alt="Compass Icon -- Plan a new trip!" id="compassesIcon">
        <h2>PLAN A NEW TRIP</h2>
      </div>
    </article>`
  MicroModal.init({awaitCloseAnimation: true});
}

const populateDestinationSelector = (destinations) => {
  destinationSelector.innerHTML = ``;
  destinations.dataset.forEach((destination) =>
    destinationSelector.innerHTML += `<option value="${destination.id}"">${destination.destination}</option>`
  )
};

const requestNewTrip = () => {
  let parsedDepartureDate = dayjs(departureDateSelector.value).format('YYYY/MM/DD');
  const newTrip = {
    id: trips.dataset.length + 1,
    userID: currentTraveler.id,
    destinationID: parseInt(destinationSelector.value),
    travelers: parseInt(tripTravelersSelector.value),
    date: parsedDepartureDate,
    duration: tripDurationSelector.value,
    status: 'pending',
    suggestedActivities: []
  };
  return fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    body: JSON.stringify(newTrip),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .catch(err => console.log(err))
};

const checkFormFields = () => {
  if (!dayjs(departureDateSelector.value).isAfter(dayjs())) {
    newTripCost.classList.add("error");
    newTripCost.innerText = "Alas, you cannot leave for a trip yesterday."
  } else if (!dayjs(departureDateSelector.value).isValid()) {
    newTripCost.classList.add("error");
    newTripCost.innerText = "Please enter a valid date."
  } else if (tripDurationSelector.value <= 0) {
    newTripCost.classList.add("error");
    newTripCost.innerText = "Please enter a valid trip duration."
  } else if (tripTravelersSelector.value <= 0) {
    newTripCost.classList.add("error");
    newTripCost.innerText = "Isn't anyone going on this trip?"
  } else if (destinationSelector.value === 'null') {
    newTripCost.classList.add("error");
    newTripCost.innerText = "Please select a valid destination."
  } else {
    newTripCost.classList.remove("error");
    estimateTripCost(destinations);
  }
}

const estimateTripCost = (destinations) => {
  let duration = parseInt(tripDurationSelector.value);
  let travelers = parseInt(tripTravelersSelector.value);
  let destination = parseInt(destinationSelector.value);
  let estimatedTripCost = Math.floor(destinations.getTotalLodgingCosts(destination, duration)
    + destinations.getTotalFlightCosts(destination, travelers) * 11) / 10;
  let costCurrency = Number.parseInt(estimatedTripCost).toFixed(2);
    newTripCost.innerText = `Cost estimate: $${costCurrency}`
}

const checkKey = (event) => {
  if (event.key === ' ') {
    openModal(event);
  } else if (event.key === 'Enter') {
    openModal(event);
  }
};

const openModal = (event) => {
  if (event.target.id === 'planTripCard') {
    MicroModal.show('modal-1');
  }
};

// QUERY SELECTORS

const tripGrid = document.getElementById('tripGrid');
const travelerGreeting = document.getElementById('travelerGreeting');
const totalTravelCosts = document.getElementById('totalTravelCosts');
const destinationSelector = document.getElementById('destinationSelector');
const departureDateSelector = document.getElementById('departureDateSelector');
const tripDurationSelector = document.getElementById('tripDurationSelector');
const tripTravelersSelector = document.getElementById('tripTravelersSelector');
const submitTripRequestButton = document.getElementById('submitTripRequestButton');
const newTripCost = document.getElementById('newTripCost');
const pageSpacer = document.getElementById('pageSpacer');
const loginSection = document.getElementById('loginSection');
const userName = document.getElementById('userName');
const password = document.getElementById('password');
const loginError = document.getElementById('loginError');
const signInButton = document.getElementById('signInButton');
const mainPage = document.getElementById('mainPage');
const signOutButton = document.getElementById('signOutButton');

// EVENT LISTENERS

tripGrid.addEventListener('keydown', checkKey);
signInButton.addEventListener('click', validateLogin);
signOutButton.addEventListener('click', signOutUser);
destinationSelector.addEventListener('input', checkFormFields);
tripDurationSelector.addEventListener('input', checkFormFields);
tripTravelersSelector.addEventListener('input', checkFormFields);
submitTripRequestButton.addEventListener('click', () => {
  checkFormFields();
  if (!newTripCost.classList.contains("error")) {
    requestNewTrip();
    clearTripGrid();
    let timeoutID = setTimeout(getAPICalls, 200);
    MicroModal.close('modal-1');
  }
})

export default updateDOM;
export {};
