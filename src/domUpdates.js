import { currentTraveler } from './scripts.js';

const updateDOM = (currentTraveler, trips, destinations) => {
  buildTravelCardGrid(currentTraveler, trips, destinations)
};

const buildTravelCardGrid = (currentTraveler, trips, destinations) => {
  let userTrips = trips.getAllUserTrips(currentTraveler.id);
  userTrips.forEach((trip) => {
  tripGrid.innerHTML += `<article class="trip-card">
          <div class="destination-photo">
            <div>
              <p class="trip-dates">${trip.date} dates</p>
            </div>
          </div>
          <div class="trip-info">
            <h1 class="destination-name">${trip.destinationID}Trip Destination</h1>
            <blockquote>
              *url blockquote here*
            </blockquote>
            <h2>COSTS:</h2>
            <p class="lodging-costs">Lodging</p>
            <p class="trip-costs">flight</p>
            <h3>Suggested activities:</h3>
            <p>${trip.suggestedActivities}activities here</p>
            <!-- card body -->
          </div>
      </article>`
  })
}

// QUERY SELECTORS

const tripGrid = document.getElementById('tripGrid');

export default updateDOM;
export {};
