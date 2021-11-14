import DataHandler from './DataHandler';

class Destinations extends DataHandler {
  constructor(dataset) {
    super(dataset)
  }
  getTotalLodgingCosts(id, tripDuration){
    this.getDataByID(id);
    return this.filteredDataByID[0].estimatedLodgingCostPerDay * tripDuration;
  }
  getTotalFlightCosts(id, tripTravelers){
    this.getDataByID(id);
    return this.filteredDataByID[0].estimatedFlightCostPerPerson * tripTravelers;
  }
}

export default Destinations;
