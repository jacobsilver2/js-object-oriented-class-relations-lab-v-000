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
    
  }

  passengers(){
    
  }
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

  setPassenger(passenger){
    this.passengerId = passenger.id;
  }

  driver() {

  }

  passenger() {
    return store.passengers.find(function(p) {
      return p.id === this.passengerId;
    });
  }

}


