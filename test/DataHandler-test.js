import chai from 'chai';
import Destinations from '../src/Destinations.js';
import Traveler from '../src/Traveler.js';
import Trips from '../src/Trips.js';
import DataHandler from '../src/DataHandler.js';
const expect = chai.expect;

let traveler1;
let traveler2;
let trip1;
let trip2;
let trips;
let destination1;
let destination2;
let destinations;
let dataHandler;
describe('Data Handler', () => {
beforeEach(() => {
  traveler1 = {
    "id": 1,
    "name": "Ham Leadbeater",
    "travelerType": "relaxer"
  };
  traveler2 = {
    "id": 2,
    "name": "Rachael Vaughten",
    "travelerType": "thrill-seeker"
  };
  traveler1 = new Traveler(traveler1);
  traveler2 = new Traveler(traveler2);

  trip1 = {
    "id": 1,
    "userID": 44,
    "destinationID": 49,
    "travelers": 1,
    "date": "2022/09/16",
    "duration": 8,
    "status": "approved",
    "suggestedActivities": []
  };
  trip2 = {
    "id": 2,
    "userID": 35,
    "destinationID": 25,
    "travelers": 5,
    "date": "2022/10/04",
    "duration": 18,
    "status": "approved",
    "suggestedActivities": []
  };
  trips = new Trips([trip1, trip2]);

  destination1 = {
    "id": 1,
    "destination": "Lima, Peru",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 400,
    "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
    "alt": "overview of city buildings with a clear sky"
  };
  destination2 = {
    "id": 2,
    "destination": "Stockholm, Sweden",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 780,
    "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "city with boats on the water during the day time"
  };
  destinations = new Destinations([destination1, destination2]);
  dataHandler = new DataHandler();
})
  it('should be able to filter different kinds of data by ID', () => {
    dataHandler.dataset = [trip1, trip2];
    expect(dataHandler.getDataByID(1)).to.deep.equal([trip1])
  })
})
