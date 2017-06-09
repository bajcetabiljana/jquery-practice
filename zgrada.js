
function Appartment(locked, number, tenant) {
    this.locked = locked;
    this.numberOfAppartment = number;
    this.tenants = [];
    this.isLocked = function () {
        return this.locked;
    };
    this.lock = function () {
        this.locked = true;
    }
    this.unLock = function () {
        this.locked = false;
    }
    this.addTenant = function(tenant){
        this.tenants.push(tenant);
    }
}
function Building() {
    this.appartments = [];
    this.add = function(appartment) {
        this.appartments.push(appartment);
    }
    this.lock = function() {
        this.appartments.forEach(appartment => appartment.lock());
    }
    this.listOfAppartNumb = function() {
         this.appartments.forEach(appartment => console.log(appartment.numberOfAppartment));
    }
    this.listOfTenants = function() {
        this.appartments.forEach(appartment => console.log(appartment.tenant));
    }
    this.brStanaIStanara = function(){
        this.appartments.forEach(appartment => console.log(appartment.numberOfAppartment + " " + appartment.tenant));
    }
    this.prosekGodinaStanara = function() {
        var add = (x,y) => x+y;
        var totalAge = this.appartments
            .map(apt => apt.tenants.map(user => user.age).reduce(add))
            .reduce(add);
        var numberOfTenants = this.appartments.map(apt => apt.tenants.length).reduce(add);
        return totalAge/numberOfTenants;
    }
}

var nasaZgrada = new Building();
var stan1 = new Appartment(true, 33,'Bajceta');
nasaZgrada.add(stan1);
nasaZgrada.lock();
nasaZgrada.listOfAppartNumb();
nasaZgrada.listOfTenants();
nasaZgrada.brStanaIStanara();
var tenant1 = new User('vlada',37,'male');
var tenant2= new User("Masa", 7, "female");
var tenant3= new User("Iva", 5, "female");
stan1.addTenant(tenant1);
stan1.addTenant(tenant2);
stan1.addTenant(tenant3);

console.log(nasaZgrada.prosekGodinaStanara());
