//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }


    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " all seats are taken.");
    
            }
        } else {
            console.log(this.model + " " + this.make + " the car is full");
        }
    }

    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true
        } else {
            console.log("fuel empty");
            return this.started = false;
        }
    }

    scheduleService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }

}

let newCar = new newCar('mercury', 'sedan', '2023', 'black', 45000)

newCar.start()
newCar.loadPassenger(5)
newCar.stop()
newCar.checkService()

console.log(newCar)