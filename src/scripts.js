import {
  fetchTravelerRepo,
  fetchTraveler,
  fetchDestinations,
  fetchTrips,
} from './apiCalls.js';
import Glide from '@glidejs/glide'
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

fetchTraveler,
fetchDestinations,
fetchTrips,

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
