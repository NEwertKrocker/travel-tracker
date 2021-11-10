import { currentTraveler } from './scripts.js';

const updateDOM = (currentTraveler, trips, destinations) => {
  buildTravelCardGrid(currentTraveler, trips, destinations)
};

const buildTravelCardGrid = (currentTraveler, trips, destinations) => {
  let userTrips = trips.getAllUserTrips(currentTraveler.id);

}

// QUERY SELECTORS



export default updateDOM;
export {};
