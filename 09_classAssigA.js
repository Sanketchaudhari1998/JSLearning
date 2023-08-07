class Vehicle {
    constructor(vehicleName, vehicleType, vehicleCompany, vehicleColor, vehicalOriginCountry){
       this.vehicleName = vehicleName
       this.vehicleType = vehicleType
       this.vehicleCompany = vehicleCompany
       this.vehicleColor = vehicleColor
       this.vehicalOriginCountry = vehicalOriginCountry
    }
    show(){
        console.log(`Vehicle Name :- ${this.vehicleName},  Type :- ${this.vehicleType},  Company :- ${this.vehicleCompany},  
        Color :- ${this.vehicleColor},  Origin Country :- ${this.vehicalOriginCountry}`);
        console.log(`-------------------------------------------------------------`);
    }
   
}

let apache = new Vehicle("Apache RTR 160 4V", "Two Wheeler", "TVS", "Matte Black", "India")

let pulserNs = new Vehicle("Pulser NS 125", "Two Wheeler", "Bajaj", "Silver Grey", "India")

let passionPro = new Vehicle("Passion Pro", "Two Wheeler", "Hero", "Blue Black", "India")

let shine = new Vehicle("Shine", "Two Wheeler", "Honda", " Black", "Japan")

let hunter = new Vehicle("Hunter", "Two Wheeler", "Royal Enfield", "White", "India")

const vehicleArray = [apache, pulserNs, passionPro, shine, hunter]
for (const vehicle of vehicleArray) {
    vehicle.show()
}

console.log(`======================================================================================`);
class College {
    constructor(collegeName, eslablishment , location , founder){
        this.collegeName = collegeName;
        this.eslablishment = eslablishment;
        this.location = location;
        this.founder = founder;
    }
    dispaly(){
        console.log(`College Name :- ${this.collegeName},  Estd :- ${this.eslablishment},  
        City :- ${this.location},  Founder :- ${this.founder}`);
        console.log(`--------------------------------------------------------------------`);
    }
}

let nit = new College("NIT", 1960, "Bnaglore", "Satendra Swamy")
nit.dispaly()
let mit = new College("MIT", 1968, "Mumbai", "Sitaji Jadhav")
mit.dispaly()
let vit = new College("VIT", 1970, "Vellore", "Venkteshwar Murti")
vit.dispaly()
let lpu = new College("LPU", 1994, "Chandigarh", "Gurpreet Singh")
lpu.dispaly()

console.log(`=======================================================`);

function traverseObject(object) {
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            console.log(`${key} : ${element}`);
        }
    }
}

traverseObject(nit)
traverseObject(mit)
traverseObject(vit)
traverseObject(lpu)
