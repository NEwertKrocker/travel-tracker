import { currentTraveler } from './scripts.js';
import Glide from '@glidejs/glide';

const updateDOM = (currentTraveler, trips, destinations) => {
  buildTravelCardGrid(currentTraveler, trips, destinations)
};

const buildTravelCardGrid = (currentTraveler, trips, destinations) => {
  let userTrips = trips.getAllUserTrips(currentTraveler.id);
  let slidesHTML = ``;
  userTrips.map((trip) => {
    slidesHTML += `Hey! A new trip!${trip}`
  })
  slideCarousel.HTML =
    `<div class="glide" id="travelCardCarousel">
      <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
          <!-- these are travel cards -->
          <li class="glide__slide travel-card">yo</li>
          <li class="glide__slide travel-card">hey</li>
          <li class="glide__slide travel-card">whassup</li>
          <li class="glide__slide travel-card">yo</li>
          <li class="glide__slide travel-card">hey</li>
          <li class="glide__slide travel-card">whassup</li>
        </ul>
        <div data-glide-el="controls">
          <!-- glide carousel controls -->
          <button data-glide-dir="<<">Start</button>
          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
          </div>
        </div>
      </div>
    </div>`;


var tripCarousel = new Glide('#travelCardCarousel', {
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
}

// QUERY SELECTORS

const slideCarousel = document.getElementById('travelCardCarousel');

export default updateDOM;
export {};
