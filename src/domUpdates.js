import { currentTraveler } from './scripts.js';

const updateDOM = (currentTraveler, trips, destinations) => {
  buildTravelCardGrid(currentTraveler, trips, destinations)
};

const buildTravelCardGrid = (currentTraveler, trips, destinations) => {
  let userTrips = trips.getAllUserTrips(currentTraveler.id);
  userTrips.forEach((trip) => {
    const destination = destinations.getDataByID(trip.destinationID);
    console.log(destination[0]);
    const lodgingCosts = destination[0].estimatedLodgingCostPerDay * trip.duration;
    const flightCosts = destination[0].estimatedFlightCostPerPerson * trip.travelers;
    tripGrid.innerHTML += `<article class="trip-card">
          <div class="destination-photo">
            <div>
              <p class="trip-dates">${trip.date} dates</p>
            </div>
          </div>
          <div class="trip-info">
            <h1 class="destination-name">${destination[0].destination}</h1>
            <blockquote>
              *url blockquote here*
            </blockquote>
            <h2>COSTS:</h2>
            <p class="total-costs">TOTAL: $${lodgingCosts + flightCosts}</p>
            <p class="lodging-costs">Lodging: $${lodgingCosts}</p>
            <p class="trip-costs">Flight: $${flightCosts}</p>
            <h3>Suggested activities:</h3>
            <p>${trip.suggestedActivities}activities here</p>
          </div>
      </article>`
  })
}

// QUERY SELECTORS

const tripGrid = document.getElementById('tripGrid');

export default updateDOM;
export {};
