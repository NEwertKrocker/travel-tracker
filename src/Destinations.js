import DataHandler from './DataHandler';

class Destinations extends DataHandler {
  constructor(dataset) {
    super(dataset)
  }
  getTotalLodgingCosts(id, trip){
    this.getDataByID(id);
    return this.filteredDataByID[0].estimatedLodgingCostPerDay * trip.duration;
  }
  getTotalFlightCosts(id, trip){
    this.getDataByID(id);
    return this.filteredDataByID[0].estimatedFlightCostPerPerson * trip.travelers;
  }
}

export default Destinations;
