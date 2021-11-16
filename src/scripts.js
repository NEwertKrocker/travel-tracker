import {
  fetchTravelerRepo,
  fetchDestinations,
  fetchTrips,
} from './apiCalls.js';
import updateDOM from './domUpdates';
import Traveler from './Traveler';
import Destinations from './Destinations';
import Trips from './Trips';
import TravelerRepo from './TravelerRepo';
import MicroModal from 'micromodal';
import './css/base.scss';
import './images/uncharted-map.jpg';
import './images/earthfromspace.jpg';
import './images/old-compasses.svg';
import './images/compass.svg';

MicroModal.init();

let travelerRepoData;
let currentTraveler;
let destinationsData;
let tripsData;
let travelerRepo;
let destinations;
let trips;

const buildTravelerRepo = (travelerRepoData) => {
  travelerRepo = new TravelerRepo(travelerRepoData);
};
const buildTraveler = (travelerData) => {
  currentTraveler = new Traveler(travelerData);
};
const buildDestinations = (destinationsData) => {
  destinations = new Destinations(destinationsData);
};
const buildTrips = (tripsData) => {
  trips = new Trips(tripsData);
};

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
  if (currentTraveler) {
    updateDOM(currentTraveler, trips, destinations)
  }
};

getAPICalls();

export {currentTraveler, trips, destinations, travelerRepo, getAPICalls, buildTraveler};
