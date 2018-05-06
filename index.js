let driverID = 0;
let passengerID = 0;
let tripID = 0;
let store = {drivers: [], passengers: [], trips: []};

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverID;
    store.drivers.push(this);
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id 
    })}

  passengers(){
    return store.trips.map(trip => {
      return trip.driverId === this.id   
    })}
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerID;
    store.passengers.push(this)
  }

  trips() {

  }

  drivers() {

  }
}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripID;
    store.trips.push(this);
  }



  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    })}

  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    })};

}


