import DataHandler from './DataHandler';

class Trips extends DataHandler {
  constructor(dataset){
    super(dataset)
  }
  getAllUserTrips(userID){
    this.getDataByUserID(userID);
    return this.filteredDataByUserID;
  }
}

export default Trips;
