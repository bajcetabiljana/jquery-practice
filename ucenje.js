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

//// Odavde


//Object Constructor
function Tenant(name, age, gender, address) {
    this.firstName = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.sendMessageToUser = function() {
        console.log("Hello: " + " " + this.firstName);
    }
}
function Appartment(number, title, locked) {

    //kako on zna da je sta po default-u zakljucan kad mu nismo odredili da je true?
    this.AppartmentNumber = number;
    this.AppartmentTitle = title;
    this.IsAppartmentLocked = locked;
    this.tenants = [];
    this.addTenant = function(tenant) {
        this.tenants.push(tenant);
    };
    this.IsLocked = function() {
        return this.IsAppartmentLocked;
    };
    this.lockAppartmant = function() {
        this.IsAppartmentLocked = true;
    }
    this.unlockAppartmant = function() {
        this.IsAppartmentLocked = false;
    };
    this.tenantsList = function() {
        this.tenants.forEach(tenant => console.log(tenant.firstName));
    };
    this.averageAgeOfTenants = function() {
        var totalAge = this.tenants.map(tenant => tenant.age).reduce((x,y) => x+y);
        console.log(totalAge);
        var brojStanara = this.tenants.length;
        console.log(totalAge/brojStanara);
    }
    this.averageLenghtOfNames = function() {
        var namesLength = this.tenants.map(tenant => tenant.firstName.length).reduce((x,y) => x+y);
        var tenantsNumb = this.tenants.length;
        console.log(namesLength/tenantsNumb);
    }
    this.genderMajority = function() {
        var tenantGender = this.tenants.map(tenant => tenant.gender);
        // var males = this.tenants.filter(tenant => tenant.gender=='male').length;

        console.log(tenantGender);
        var males = tenantGender.filter(gender => gender=='male').length;
        var females = tenantGender.filter(gender => gender=='female').length;
        console.log('males : ' + males);
        console.log('females : ' + females);
        var tenantsNumb = this.tenants.length;
        if(males < females ){
            console.log("Zene su u vecini");
        }
        else if(males > females) {
            console.log("Muskarci su u vecini");
        }
        else {
            console.log("Isti broj muskih i zenskih stanara");
        }
    }
}

function Building() {
    this.appartments = [];
    this.newAppartment = function(appartment) {
        this.appartments.push(appartment);
    }
    this.appListOfTenants = function() {
        this.appartments.map(appartment => console.log(appartment.tenantsList()));
    };


}


//function out of Constructor ???????
var sendMessageToUser = function(x) {
    console.log("Hello: " + " " + x.firstName);
}

//Creating new Object
var appartment1 = new Appartment(1, 'Bajceta', true);
var appartment2 = new Appartment(2, 'Linson', false);
var tenant1 = new Tenant('Vlada',37,'male','Malmo');
var tenant2 = new Tenant('Masa',7,'female','Malmo');
var tenant3 = new Tenant('Iva',5,'female','Malmo');
var tenant4 = new Tenant('Bilja',40,'female','Malmo');

var tenant5 = new Tenant('Pit',52,'male','Malmo');
var tenant6 = new Tenant('Mia',7,'male','Malmo');
var tenant7 = new Tenant('Lora',12,'female','Malmo');
var tenant8 = new Tenant('Zeta',47,'male','Malmo');
var NasaMalaZgradica = new Building();


appartment1.addTenant(tenant1);
appartment1.addTenant(tenant2);
appartment1.addTenant(tenant3);
appartment1.addTenant(tenant4);

console.log('Lista stanara');
appartment1.tenantsList();

appartment2.addTenant(tenant5);
appartment2.addTenant(tenant6);
appartment2.addTenant(tenant7);
appartment2.addTenant(tenant8);

NasaMalaZgradica.newAppartment(appartment1);
NasaMalaZgradica.newAppartment(appartment2);

NasaMalaZgradica.appListOfTenants();
appartment2.averageAgeOfTenants();
appartment2.averageLenghtOfNames();


//poziv funcije koja se nalazi u nekom constructoru
tenant1.sendMessageToUser();
//poziv funckija koja se nalazi van objekta ?????????
sendMessageToUser(tenant1);

appartment1.genderMajority();

appartment2.genderMajority();
//
//TO DO LISTA
function Stavka(ime, kolicina, cena, kupljena) {
    this.imeStavke = ime;
    this.kolicina = kolicina;
    this.cenaPoKomadu = cena;
    this.kupljena = kupljena;
    this.ukupnaCena = function() {
        return this.lista.map(stavka => stavka.cenaPoKomadu * stavka.kolicina * stavka.kolicina);
    }
    this.kupljeniArtikli  = function() {
        if (this.kupljena == true) {
            console.log(this.imeStavke + ' ' +'je kupljen');
        }
    }
    this.kupiti = function() {
        if (this.kupljena == false) {
            console.log(this.imeStavke + 'kupiti');
        }
    }
    this.luksuzCena = this.cenaPoKomadu > 10;
}

function Lista() {
    this.lista = [];
    this.dodajNaListu = function(stavka) {
        this.lista.push(stavka);
    }
    this.spisak = function() {
        console.log('Spisak stavki');
        this.lista.forEach((stavka,index) => console.log('Stavka ' + (index+1) +  ' ' + stavka.imeStavke + ' ' + stavka.cenaPoKomadu));
    }
    this.spisakPoKilazi = function(){
        //return this.lista.sort((a,b) => a.kolicina>b.kolicina ? 1 : -1);
        return this.lista.sort((a,b) => b.kolicina-a.kolicina);
    }
    this.ukupnoStavki = function() {
        return this.lista.length;
    }
    this.spisakOdNajskupljeStavke= function() {
        return this.lista.sort((a,b) => a.cenaPoKomadu < b.cenaPoKomadu ? 1 : -1);
    }
    this.ukupnaCenaStavke = function() {
        return this.lista.sort((a,b) => a.ukupnaCena - b.ukupnaCena);
    }
    this.kupljeneStavke = function() {
        return this.lista.forEach(stavka => stavka.kupljeniArtikli()); {

        }
    }
    this.listaZaKupovinu = function() {
        return this.lista.forEach(stavka => stavka.kupiti());
    }
    this.luksuznaRoba = function() {
        return this.lista.filter(stavka => stavka.luksuzCena).map(stavka => stavka.imeStavke)
        ;
    }
    this.obrisiStavku = function(stavka) {
        return function() {
            return this.lista.splice(stavka,1);
        }
    }

}

var stavka1 =  new Stavka('kupus', 1, 10, true);
var stavka2 =  new Stavka('jabuka', 5, 15, false);
var stavka3 =  new Stavka('ananas', 3, 40, false);
console.log(stavka1);
var lista1 = new Lista();
lista1.dodajNaListu(stavka1);
lista1.dodajNaListu(stavka2);
lista1.dodajNaListu(stavka3);
console.log(lista1);
console.log('TEST' + ' ' + lista1.lista.length);
console.log('TEST2' + ' ' + lista1.ukupnoStavki());
lista1.spisak();
console.log(lista1.spisakPoKilazi());
console.log(Object.keys(lista1));
console.log(lista1.spisakOdNajskupljeStavke());
console.log('Test 3');
console.log('Stavke po ukupnoj ceni' + lista1.ukupnaCenaStavke());
console.log(lista1.ukupnaCenaStavke());
console.log(lista1.listaZaKupovinu());
console.log(lista1.kupljeneStavke());
console.log(lista1.luksuznaRoba());
console.log('gde sam?')
console.log(lista1.obrisiStavku('kupus'));
console.log(lista1.spisak());

