// document.write("this is shit");

// function add (x,y) {
//     this.x = x;
//     this.y = y;
//     this.sum = x+y;
//     return sum;
// }
// console.log(add(2,3));

function addNumbers () {
    var x = document.addingForm.x.value - 0;
    var y = document.addingForm.y.value - 0;
    var sum = x+y;
    document.addingForm.score.value = sum;
}


//MOJ NACIN
function add () {
    var x = document.calculate.first.value - 0;
    var y = document.calculate.second.value - 0;
    var sum = x+y;
    document.calculate.score.value = sum;
}

function substract () {
    var x = document.calculate.first.value - 0;
    var y = document.calculate.second.value - 0;
    var sum = x-y;
    document.calculate.score.value = sum;
}

function multiplay () {
    var x = document.calculate.first.value - 0;
    var y = document.calculate.second.value - 0;
    var sum = x*y;
    document.calculate.score.value = sum;
}

function devide () {
    var x = document.calculate.first.value - 0;
    var y = document.calculate.second.value - 0;
    var sum = x/y;
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
            case 1: sum = x + y;
            break;
            case 2: sum = x - y;
            break;
            case 3: sum = x * y;
            break;
            case 4: sum = x / y;
            break;
        }
        document.cal.score.value = sum;
    } else {
        alert('You need to use only numbers');
    }
}

// FActorial = OVO MORAS DA MI OBJASNIS
// function factorialFunction(n) {
//     if (isNaN(n) || n < 0) {
//         return "ERROR";
//         return  (n == 0 ? 1 : n*factorial(n-1));
//         }
//     }
// }

// function calculateFactorial() {
//     var n = parseInt(document.factorial.number.value, 10);
//     document.factorial.result.value = factorialFunction(n);
// }



