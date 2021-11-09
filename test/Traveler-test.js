import chai from 'chai';
import Traveler from '../src/Traveler.js';
const expect = chai.expect;

describe('Traveler', () => {

  let traveler1;
  let traveler2;
  let traveler3;

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
    traveler3 = {
      "id": 3,
      "name": "Sibby Dawidowitsch",
      "travelerType": "shopper"
    };
    traveler1 = new Traveler(traveler1);
    traveler2 = new Traveler(traveler2);
    traveler3 = new Traveler(traveler3);
  })
  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });
  it('should have an ID number', () => {
    expect(traveler1.id).to.equal(1);
    expect(traveler2.id).to.equal(2)
  });
});
