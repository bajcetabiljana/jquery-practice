// ZADACI PREUZETI ODAVDE:URL= rti.etf.bg.ac.rs/rti/ir4pia/materijali/vezbe/2_JavaScript/JavaScript_Zbirka.pdf

// document.write("this is shit");

// function add (x,y) {
//     this.x = x;
//     this.y = y;
//     this.sum = x+y;
//     return sum;
// }
// console.log(add(2,3));

function addNumbers() {
    var x = document.addingForm.x.value - 0;
    var y = document.addingForm.y.value - 0;
    var sum = x + y;
    document.addingForm.score.value = sum;
}


//MOJ NACIN
function add() {
    var x = document.calculate.first.value - 0;
    var y = document.calculate.second.value - 0;
    var sum = x + y;
    document.calculate.score.value = sum;
}

function substract() {
    var x = document.calculate.first.value - 0;
    var y = document.calculate.second.value - 0;
    var sum = x - y;
    document.calculate.score.value = sum;
}

function multiplay() {
    var x = document.calculate.first.value - 0;
    var y = document.calculate.second.value - 0;
    var sum = x * y;
    document.calculate.score.value = sum;
}

function devide() {
    var x = document.calculate.first.value - 0;
    var y = document.calculate.second.value - 0;
    var sum = x / y;
    document.calculate.score.value = sum;
}
// THE END

// NJIHOV NACIN
function calculator(operation) {
    var x = parseInt(document.cal.first.value);
    var y = parseInt(document.cal.second.value);
    var sum = 0;

    if ((isNaN(x) == false) && (isNaN(y) == false)) {
        switch (operation) {
            case 1:
                sum = x + y;
                break;
            case 2:
                sum = x - y;
                break;
            case 3:
                sum = x * y;
                break;
            case 4:
                sum = x / y;
                break;
        }
        document.cal.score.value = sum;
    } else {
        alert('You need to use only numbers');
    }
}

// FActorial = OVO MORAS DA MI OBJASNIS
// function factorialFunction(n) {
//     if (isNaN(n) || n < 0)
//         return "ERROR";
//         return  (n == 0 ? 1 : n*factorial(n-1));
//     }
// }

// function calculateFactorial() {
//     var n = parseInt(document.factorial.number.value, 10);
//     document.factorial.result.value = factorialFunction(n);
// }


// Promena citata kada se stranica osvezi
// ni ovo nemam poima

// authors = new Array(6);
// quotes = new Array(6);

// quotes[0] = "Toliko je bilo stvari u životu kojih smo se bojali.
// A nije trebalo. Trebalo je živeti.";
// authors[0] = "Ivo Andrić";
// quotes[1] = "Prijateljstvo se na bira, ono biva, ko zna zbog čega,
// kao ljubav";
// authors[1] = "Meša Selimović";
// quotes[2] = "Zdrav covek ima hiljadu želja,
// a bolestan samo jednu - da ozdravi.";
// authors[2] = "Narodna izreka";
// quotes[3] = "Nemojte da hendikepirate svoju decu time što ćete im
// život učiniti suviše lakim";
// authors[3] = "Duško Radović";
// quotes[4] = "Čast se ne može oduzeti, ona se može samo izgubiti";
// authors[4] = "Čehov";
// quotes[5] = "Nema sunca bez svetlosti, ni čoveka bez ljubavi";
// authors[5] = "Gete";

// index = Math.floor(Math.random() * quotes.length);
// document.write("<DL>\n");
// document.write("<DT>" + "\"" + quotes[index] + "\"\n");
// document.write("<DD>" + "- " + authors[index] + "\n");
// document.write("</DL>\n");


// ODLAGANJE IZVRSENJA NECEGA

function changeText() {
    document.texts.myText.value = "Wait a wail";
    setTimeout('document.texts.myText.value = "Bravo!!!"',1000);
}

// On each 2sec decrease/increas number for 1


function countingdown() {
   document.countDown.num.value--;
}

function startCountingDown() {
    var count = setInterval("countingdown()", 2000);
}
function countingUp() {
    document.countDown.num.value++;
}

function startCountingUp() {
    var count = setInterval("countingUp()", 2000);
  //   if (document.countDown.num.value === 102) {
  //   alert("HAPPY NEW YEAR!!");
  //   clearInterval(count);
  // }
}
// function stop() {
//     clearInterval(count);
// }



//kako da prekinem odbrojavanje i da otponcem novo?

//TRENUTNO VREME===poiima nemam


function Vreme() {
    time = new Date()
    cas=time.getHours()
    minuti=time.getMinutes()
    sekunde=time.getSeconds()
    temp = "" + ((cas>12)?cas-12:cas)
    temp += ((minuti<10)?":0":":")+minuti
    temp += ((sekunde<10)?":0":":")+sekunde
    temp += ((cas>=12)?" P.M.":" A.M.")
    document.vremeForma.cifre.value=temp
    setTimeout("Vreme()",1000)
}