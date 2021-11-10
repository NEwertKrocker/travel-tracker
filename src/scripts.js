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
import Glide from '@glidejs/glide'
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let currentTraveler;
let destinations;
let trips;

const getTraveler = (id) => {
  fetchTraveler(id)
  .then(response => buildTraveler(response))}
const getDestinations = () => {
  fetchDestinations()
  .then(response => buildDestinations(response))}
const getTrips = () => {
  fetchTrips()
  .then(response => buildTrips(response))}


const buildTraveler = (response) => {
  currentTraveler = new Traveler(response);
  console.log(currentTraveler);
};
const buildDestinations = (response) => {
  destinations = new Destinations(response);
  console.log(destinations);
};
const buildTrips = (response) => {
  trips = new Trips(response);
  console.log(trips);
};

getTraveler(1);
getDestinations();
getTrips();

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
