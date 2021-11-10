import {
  fetchTravelerRepo,
  fetchTraveler,
  fetchDestinations,
  fetchTrips,
} from './apiCalls.js';
import updateDOM from './domUpdates';
import Traveler from './Traveler';
import Destinations from './Destinations';
import Trips from './Trips';
import TravelerRepo from './TravelerRepo';
import Glide from '@glidejs/glide'
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let travelerRepoData;
let currentTraveler;
let destinationsData;
let tripsData;
let travelerRepo;
let destinations;
let trips;

const getAPICalls = () => {
  Promise.all([fetchTravelerRepo(), fetchDestinations(), fetchTrips()])
    .then(gatheredData => sortData(gatheredData))
};

const sortData = (gatheredData) => {
  travelerRepoData = gatheredData[0].travelers;
  destinationsData = gatheredData[1].destinations;
  tripsData = gatheredData[2].trips;
  buildClasses(travelerRepoData, destinationsData, tripsData);
};

const buildClasses = (travelerRepoData, destinationsData, tripsData) => {
  buildTravelerRepo(travelerRepoData);
  buildDestinations(destinationsData);
  buildTrips(tripsData);
  console.log(trips.getAllUserTrips(1));
}

const buildTravelerRepo = (travelerRepoData) => {
  travelerRepo = new TravelerRepo(travelerRepoData);
  console.log(travelerRepo);
};
const buildTraveler = (travelerData) => {
  currentTraveler = new Traveler(travelerData);
  console.log(currentTraveler);
};
const buildDestinations = (destinationsData) => {
  destinations = new Destinations(destinationsData);
  console.log(destinations);
};
const buildTrips = (tripsData) => {
  trips = new Trips(tripsData);
  console.log(trips);
};

getAPICalls();

new Glide('#travelCardCarousel', {
  type: 'carousel',
  perView: 3,
  focusAt: 'center',
  gap: 10,
  peek: 50,
  breakpoints: {
    800: {
      perView: 1
    }
  }
  }).mount()

export {currentTraveler};
