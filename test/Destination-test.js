import chai from 'chai';
import Destinations from '../src/Destinations.js';
const expect = chai.expect;

describe('Destinations', () => {

  let destination1;
  let destination2;
  let destination3;
  let destinations;
  let trip;

  beforeEach(() => {
    trip = {
      "id": 2,
      "userID": 35,
      "destinationID": 25,
      "travelers": 5,
      "date": "2022/10/04",
      "duration": 18,
      "status": "approved",
      "suggestedActivities": []
    };
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
    destination3 = {};
    destinations = new Destinations([destination1, destination2, destination3]);
  })
  it('should be a function', () => {
    expect(Destinations).to.be.a('function');
  });
  it('should be able to find a destination\'s ID number', () => {
    expect(destinations.dataset[0].id).to.equal(1);
    expect(destinations.dataset[1].id).to.equal(2);
    expect(destinations.dataset[2].id).to.equal(undefined);
  });
  it('should be able to hold destination\'s locations', () => {
    expect(destinations.dataset[0].destination).to.equal("Lima, Peru");
    expect(destinations.dataset[1].destination).to.equal("Stockholm, Sweden");
    expect(destinations.dataset[2].destination).to.equal(undefined);
  });
  it('should track the estimated lodging cost per day', () => {
    expect(destinations.dataset[0].estimatedLodgingCostPerDay).to.equal(70);
    expect(destinations.dataset[1].estimatedLodgingCostPerDay).to.equal(100);
    expect(destinations.dataset[2].estimatedLodgingCostPerDay).to.equal(undefined);
  });
  it('should track the estimated flight cost per person', () => {
    expect(destinations.dataset[0].estimatedFlightCostPerPerson).to.equal(400);
    expect(destinations.dataset[1].estimatedFlightCostPerPerson).to.equal(780);
    expect(destinations.dataset[2].estimatedFlightCostPerPerson).to.equal(undefined);
  });
  it('have an associated image', () => {
    expect(destinations.dataset[0].image).to.equal("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
    expect(destinations.dataset[1].image).to.equal("https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    expect(destinations.dataset[2].image).to.equal(undefined);
  });
  it('have alt text for its image', () => {
    expect(destinations.dataset[0].alt).to.equal("overview of city buildings with a clear sky");
    expect(destinations.dataset[1].alt).to.equal("city with boats on the water during the day time");
    expect(destinations.dataset[2].alt).to.equal(undefined);
  });
  it('should be able to calculate total lodging cost for a trip', () => {
    expect(destinations.getTotalLodgingCosts(1, trip.duration)).to.equal(1260);
    expect(destinations.getTotalLodgingCosts(2, trip.duration)).to.equal(1800);
  });
  it('should be able to calculate total flight cost for a trip', () => {
    expect(destinations.getTotalFlightCosts(1, trip.travelers)).to.equal(2000);
    expect(destinations.getTotalFlightCosts(2, trip.travelers)).to.equal(3900);
  });

});
