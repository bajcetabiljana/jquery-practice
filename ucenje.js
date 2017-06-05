function add(x, y) {
    return x + y;
}

var numbers = [1, 4, 5, 2];

var sum = numbers.reduce(add);
var sum = numbers.reduce((x, y) => x + y);
console.log(sum);

var s2 = numbers.filter(num => num < 4);
console.log(s2);
console.log(s2.reduce(add));


var users = [
    {
        name: 'Mike',
        gender: 'male',
        age: 25
    },
    {
        name: 'Ana',
        gender: 'female',
        age: 29
    },
    {
        name: 'Marija',
        gender: 'female',
        age: 33
    }
];


users.filter(user => user.gender == 'male')
    .forEach(user => console.log(user.name));

var totalAge = users.map(user => user.age).reduce(add);
console.log(totalAge);
var averageAge = totalAge / users.length;

console.log(averageAge);


function isMale(user) {
    return user.gender == 'male';
}

function isFemale(user) {
    return user.gender == 'female';
}

console.log(users.filter(isFemale));

/// Closure

function isGender(gender) {
    return function (user) {
        return user.gender == gender;
    };
}

var isMale = isGender('male');
var isFemale = isGender('female');

console.log(users.filter(isMale));
console.log(users.filter(isFemale));


//// gotovo Closure

function User(name, age, gender, address) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.sayHello1 = function () {
        console.log(this.name + ' says hello!');
    };
}


var vlada = new User('Vlada', 37, 'male');
var bilja = new User('Bilja', 40, 'female');
var korisnici = [];
korisnici.push(vlada);
korisnici.push(bilja);
console.log(korisnici);
console.log(' ');
console.log(' ');
console.log(' ');
// bilja.sayHello();

function sayHello2(mis) {
    console.log(mis.name + ' says hello!');
}

sayHello2(bilja);
bilja.sayHello1();

korisnici.forEach(sayHello2);
korisnici.forEach(user => user.sayHello1());
var muski = korisnici.filter(isGender('male'));
console.log(muski);

/////////


var godine = [5, 7, 37, 40];
var povecanDrugi = godine.map((broj, index) => {
    if (index == 2) {
        return broj + 3;
    } else {
        return broj;
    }
});
console.log(povecanDrugi);


var povecajSve = godine.map(broj => broj + 1);
console.log(povecajSve);


var povecaj = function (indexToIncrease, increment) {
    return function (number, index) {
        if (index == indexToIncrease) {
            return number + increment;
        } else {
            return number;
        }
    };
};

var povecan2 = godine.map(povecaj(1, 3));
console.log(povecan2);

console.log("///////////////////");

var zbir = function (a, b) {
    return a + b;
}
console.log(zbir(2, 3));

var uvecajZa3 = function (broj) {
    return broj + 3;
}
console.log(uvecajZa3(5));

var uvecajZa5 = function (broj) {
    return broj + 5;
}
console.log(uvecajZa5(7));

function uvecajBroj(uvecajZaBroj) {
    return function adder(broj) {
        return broj + uvecajZaBroj;
    }
}
var uvecajZa55 = uvecajBroj(55);
console.log(uvecajZa55(5));

var brojevi = [1, 5, 10];

var uvecavaci = brojevi.map(uvecajBroj);
uvecavaci.forEach(fn => console.log(fn(33)));

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



