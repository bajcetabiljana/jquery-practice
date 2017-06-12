//Consturctor

function Restoran(ime, vremeOtvaranja, vremeZatvaranja, adresa, meni, kapacitet) {
    this.imeRestorana = ime;
    this.vremeOtvaranja = vremeOtvaranja;
    this.vremeZatvaranja = vremeZatvaranja;
    this.adresa = adresa;
    this.meni = meni;
    this.kapacitet = kapacitet;
    this.tipRestorana = ['riblji', 'vegetarijanski', 'italijanski', 'etno'];
    this.stolovi = [];
    this.porudzbine = [];
    this.dodajRezervaciju = function(rezervacija) {
        return this.porudzbine.push(rezervacija);
    }
    this.listaRezervacija = function() {
        return this.porudzbine.forEach(rez => console.log(rez));
    }
    this.odgovorNaRezervaciju = function(rezervacija) {
        if (rezervacija.brojOsoba <= this.kapacitet) {
            console.log('Uspesno ste rezervisali sto');
        }
        else {
            console.log('Zao nam je svi stolovi su zauzeti');
        }
    }

}

function Meni(ime) {
    this.meni = [];
    this.deloviMenija = ['dorucak', 'kuvana jela', 'rostilj', 'riba', 'pice', 'dezert'];
    this.dodajJelo = function(jelo) {
        return this.meni.push(jelo);
    }
    this.staviUPraviDeoMenija = function() {

    }
    this.spisakJela = function() {
        this.meni.forEach(jelo => console.log(jelo.ime + ' ' + jelo.cena + ' ' +  jelo.vrstaJela));
    }
}
function Jelo(ime, cena, vrstaJela) {
    this.ime = ime;
    this. cena = cena;
    this.vrstaJela = vrstaJela;
    this.vrsteJela = ['dorucak', 'kuvana jela', 'rostilj', 'salata', 'riba', 'pice', 'dezert'];
    this.sastojci = [];
    // this.deoMenija = function(imeJela) {
    //     if (this.vrstaJela == 'dorucak') {
    //         return this.vrsteJela.map(jelo => jelo.vrstaJela == 'dorucak')
    //                         .indexOf(jelo)
    //                         .push(jelo);
    //     }else if(this.vrstaJela == 'kuvano jelo'){
    //         return this.vrsteJela.map(jelo => jelo.vrstaJela == 'kuvano jelo')
    //                         .indexOf(jelo)
    //                         .push(jelo);
    //     }
    //     else {
    //         console.log('Poima nemam');
    //     }
    // }
}
function Rezervacija(ime, prezime, brojOsoba, dan, vreme) {
    this.ime = ime;
    this.prezime = prezime;
    this.brojOsoba = brojOsoba;
    this.dan = dan;
    this.vreme = vreme;
}


// Objects

var restoran1 = new Restoran('Sunlight', 7, 2, 'Safarikova 4a', 'meni1', 10);
var meni1 = new Meni('meni1');
var sarma = new Jelo('sarma', 1000, 'kuvano');
var princesKrofne = new Jelo('princes korfne', 700, 'kolac');
var rakija = new Jelo('rakija', 400, 'pice');
var beckaSnicla = new Jelo('Becka snicla', 1300, 'meso');
var sopskaSalata = new Jelo('salata', 'sopska salata', 'salata');
var rezervacija1 = new Rezervacija('Vladimir', 'Bajceta', 2, 'Subota', 18);

meni1.dodajJelo(sarma);
meni1.dodajJelo(princesKrofne);
meni1.dodajJelo(rakija);
meni1.dodajJelo(beckaSnicla);
meni1.dodajJelo(sopskaSalata);
console.log(meni1.spisakJela());
console.log(restoran1.dodajRezervaciju(rezervacija1));
console.log(restoran1.odgovorNaRezervaciju(rezervacija1));
console.log(restoran1.listaRezervacija(rezervacija1));
