// 1
let bus = prompt("Введите номер маршрутки")
switch(+bus) {
    case 7:
        console.log('You can go');
        break;
    case 255:
        console.log('You can go');
        break;
    case 115:
        console.log('You can go');
        break;
    default:
        console.log('Please wait');
        break;
}

// 2
let piValue = prompt('Введите чесло pi');
let myPi = Math.PI.toFixed(2)
if ( +piValue >= myPi) {
    console.log( 'You entered: ' + myPi + '\n Is greater then PI: true');
} else if ( +piValue <= myPi)  {
    console.log('Is less then PI: false');
} else {
    console.log('Is equal PI: false');
}

// 3
let weekArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let day = prompt('Введите число от 1 до 7:');

if (day > 7 || day < 1) {
    console.log("Error");
} else {
    console.log(weekArr[day - 1])
}

// 4
let pass = prompt('Enter password');
let length = pass.length;

if (length < 6 || pass == 'qwerty' || pass == 123456) {
    alert('Enter password again!');
} else {
    let goFurther = false;
    for (let i = 0; i < length; i++) {
        if (pass[i] == pass[i].toUpperCase()) {
            goFurther = true;
        }
    }
    if (goFurther == true) {
        console.log('Strong')
    } else {
        alert('Use uppercase letters');
    }
}


// 5
let lang = prompt("Enter your language");
if (lang === 'ru') {
    console.log('Првет');

} else if (lang === 'eng')  {
    console.log('Hello');

} else if (lang === 'ua') {
    console.log('Привiт');

} else {
    console.log('I don\'t know this language');
}


let langCase = prompt("Enter your language");
switch (langCase) {

    case "ru": {
        console.log("Привет");
        break;
    }
    case "eng": {
        console.log("Hello");
        break;
    }
    case "ua": {
        console.log("Привiт");
        break;
    }
    case "RU": {
        console.log("Привет");
        break;
    }
    case "ENG": {
        console.log("Hello");
        break;
    }
    case "UA": {
        console.log("Привiт");
        break;
    }
    default: {
        console.log("I don't know this language");
        break;
    }
}