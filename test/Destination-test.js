import chai from 'chai';
import Destinations from '../src/Destinations.js';
const expect = chai.expect;

describe('Destinations', () => {

  let destination1;
  let destination2;
  let destination3;

  beforeEach(() => {
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
    destination1 = new Destinations(destination1);
    destination2 = new Destinations(destination2);
    destination3 = new Destinations(destination3);
  })
  it('should be a function', () => {
    expect(Destinations).to.be.a('function');
  });
  it.skip('should have an ID number', () => {
    expect(destination1.id).to.equal(1);
    expect(destination2.id).to.equal(2);
    expect(destination3.id).to.equal(undefined);
  });
  it.skip('should store a location as `.destination`', () => {
    expect(destination1.destination).to.equal("Lima, Peru");
    expect(destination2.destination).to.equal("Stockholm, Sweden");
    expect(destination3.destination).to.equal(undefined);
  });
  it.skip('should track the estimated lodging cost per day', () => {
    expect(destination1.estimatedLodgingCostPerDay).to.equal(70);
    expect(destination2.estimatedLodgingCostPerDay).to.equal(100);
    expect(destination3.estimatedLodgingCostPerDay).to.equal(undefined);
  });
  it.skip('should track the estimated flight cost per person', () => {
    expect(destination1.estimatedFlightCostPerPerson).to.equal(400);
    expect(destination2.estimatedFlightCostPerPerson).to.equal(780);
    expect(destination3.estimatedFlightCostPerPerson).to.equal(undefined);
  });
  it.skip('have an associated image', () => {
    expect(destination1.image).to.equal("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
    expect(destination2.image).to.equal("https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    expect(destination3.image).to.equal(undefined);
  });
  it.skip('have alt text for its image', () => {
    expect(destination1.alt).to.equal("overview of city buildings with a clear sky");
    expect(destination2.alt).to.equal("city with boats on the water during the day time");
    expect(destination3.alt).to.equal(undefined);
  });
});
