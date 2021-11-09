import chai from 'chai';
import TravelerRepo from '../src/TravelerRepo.js';
const expect = chai.expect;

describe('TravelerRepo', () => {

  let travelerData;
  let travelerRepo1;
  let travelerRepo2;

  beforeEach(() => {
    travelerData = [{
      "id": 1,
      "name": "Ham Leadbeater",
      "travelerType": "relaxer"
    },
    {
      "id": 2,
      "name": "Rachael Vaughten",
      "travelerType": "thrill-seeker"
    },
    {
      "id": 3,
      "name": "Sibby Dawidowitsch",
      "travelerType": "shopper"
    },
    {
      "id": 4,
      "name": "Leila Thebeaud",
      "travelerType": "photographer"
    },
    {
      "id": 5,
      "name": "Tiffy Grout",
      "travelerType": "thrill-seeker"
    }];
    travelerRepo1 = new TravelerRepo(travelerData);
    travelerRepo2 = new TravelerRepo([travelerData[0], travelerData[2], travelerData[4]])
  })
  it('should be a function', () => {
    expect(TravelerRepo).to.be.a('function');
  });
  it('should be able to hold a set of travelers', () => {
    expect(travelerRepo1.travelers).to.deep.equal(travelerData);
    expect(travelerRepo2.travelers).to.deep.equal([travelerData[0], travelerData[2], travelerData[4]])
  });
});
