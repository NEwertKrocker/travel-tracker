import { currentTraveler } from './scripts.js';
import dayjs from 'dayjs';
import MicroModal from 'micromodal';

const updateDOM = (currentTraveler, trips, destinations) => {
  buildTravelCardGrid(currentTraveler, trips, destinations);
  addTripRequestCard(currentTraveler, trips, destinations);
  displayGreeting(currentTraveler);
  displayYTDCosts(currentTraveler, trips, destinations);
};

const displayGreeting = (currentTraveler) => {
  let greeting = `Welcome, ${currentTraveler.name}!`
  travelerGreeting.innerText = greeting.toUpperCase();
}

const displayYTDCosts = (currentTraveler, trips, destinations) => {
  let totalCosts = trips.calculateTravelCostYTD(currentTraveler.id, destinations);
  totalTravelCosts.innerHTML += `<br> $${totalCosts}`
}

const buildTravelCardGrid = (currentTraveler, trips, destinations) => {
  let userTrips = trips.getAllUserTrips(currentTraveler.id);
  userTrips.forEach((trip) => {
    const destination = destinations.getDataByID(trip.destinationID);
    const lodgingCosts = destinations.getTotalLodgingCosts(destination[0].id, trip);
    const flightCosts = destinations.getTotalFlightCosts(destination[0].id, trip);
    const destinationImage = destination[0].image;
    const tripEnd = dayjs(trip.date).add(trip.duration, 'day').format('YYYY/MM/DD');
    tripGrid.innerHTML += `<article class="trip-card" tabindex="0">
          <div class="destination-photo" style="background-image: url(${destinationImage});">
              <p class="trip-shader">
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

const addTripRequestCard = (currentTraveler, trips, destinations) => {
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
    MicroModal.init();
}

const checkKey = (event) => {
  if(event.key === 'Space'){
    openModal(event);
  } else if(event.key === 'Enter') {
    openModal(event);
  }
};

const openModal = (event) => {
  if(event.target.id === 'planTripCard'){
    MicroModal.show('modal-1');
  }
};

// QUERY SELECTORS

const tripGrid = document.getElementById('tripGrid');
const travelerGreeting = document.getElementById('travelerGreeting');
const totalTravelCosts = document.getElementById('totalTravelCosts');
const planTripCard = document.getElementById('planTripCard');

// EVENT LISTENERS

tripGrid.addEventListener('keydown', checkKey);


export default updateDOM;
export {};
