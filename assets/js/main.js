// 15

var string = "Let's start";
console.log(string);

var number = 365;
console.log(number);

var bool = true;
console.log(bool);

var array = [1, 2, 3, 4, 5];
console.log(array);

var object = {
    year: '2019',
    month: 'may',
    day: '1'
};
console.log(Object.values(object));

var integer = 765;
var real = integer.toFixed(2);
console.log(real);


var i = 5;
console.log(++i); //6
console.log(i++); //6
console.log(i--); //7
console.log(--i); //5


var a = 10;
a += 20;
console.log(a); //30

var b = 10;
b -= 5;
console.log(b); //5

var c = 7;
c *= 8;
console.log(c); //56

var d = 10;
d /= 20;
console.log(d); //0.5

var e = 467;
e %= 3;
console.log(e); //2


console.log(Math.PI);

console.log(Math.round(89.279));

console.log(Math.round(Math.random() * 10));

console.log(Math.pow(2, 5));

var string = 'What is the length of the string';
console.log(`Length of string is: ${string.length}`);

var string = 'What is the length of the string';
console.log(string.indexOf('is'));

var string = 'What is the length of the string';
console.log(string.replace('What is', 'Now we know'));

var string = 'What is the length of the string?';
console.log(string.toUpperCase());

var string = 'What is the length of the string?';
console.log(string.toLowerCase());


//16

var s = '';
if (s) {
    console.log(s);
} else {
    console.log('string is empty');
};

var browser = Object.create(null);
browser.name = 'chrome';
browser.producer = 'google';
browser.vers = '69.0.3497.100';
browser.core = 'blink';
console.log(browser);


var browser = Object.create(null);
this.name = 'chrome';
this.producer = 'google';
this.vers = '69.0.3497.100';
this.core = 'blink';
console.log(this.name);
console.log(this.vers);


for (var i = 1; i <= 20; i++) {
    if (i % 2) continue;
    console.log(i);
};


var fruit = 'Carrot';
switch (fruit) {
    case "Oranges":
        console.log("Take 2 kg of " + fruit);
        break;
    case "Apples":
        console.log("Take 2 kg of " + fruit);
        break;
    case "Bananas":
        console.log("Take 2 kg of " + fruit);
        break;
    case "Cherries":
        console.log("Take  2kg of " + fruit);
        break;
    case "Grapes":
    case "Peaches":
        console.log("Take 1 kg of " + fruit);
        break;
    default:
        console.log("Don't take " + fruit);
};


var x = Math.round(Math.random() * 30);
var text = x > 15 ? 'x больше 15' : 'x меньше либо равен 15';
console.log("x=" + x + " значит " + text);


var i = 0;
while (i <= 7) {
    console.log(i++);
};

function myFunction(arg1, arg2, callback) {
    console.log("Число arg1 в степени arg2:");
    var myNumber = Math.pow(arg1, arg2);
    callback(myNumber);
};
myFunction(2, 4, function (res) {
    console.log("Результат: " + res);
});
