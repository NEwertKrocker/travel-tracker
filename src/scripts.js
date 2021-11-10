import {
  fetchTravelerRepo,
  fetchTraveler,
  fetchDestinations,
  fetchTrips,
} from './apiCalls.js';
import Traveler from './Traveler';
import Destination from './Destination';
import Trip from './Trip';
import Glide from '@glidejs/glide'
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let traveler;

const getTraveler = (id) => {
  fetchTraveler(id)
  .then(response => buildTraveler(response))}
let destination = fetchDestinations()
  .then(data => new Destination(data));
let trip = fetchTrips()
  .then(data => new Trip(data));

const buildTraveler = (response) => {
  traveler = new Traveler(response);
};

getTraveler(1);

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

export {traveler};
