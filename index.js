alert ("Welcome");



var userName = prompt("Ismingizni kiriting!");


var userAge =  prompt("Yoshingizni kiriting!");


var userAddress =  prompt("Manzilingizni kiriting!");

var userAmbition =  prompt("Saytdan foydalanishni hohlaysizmi!");

console.log(userName + "  " + userAge + "  " + userAddress + "  " + userAmbition);



btn.addEventListener('click', () => {
    var year = prompt("Enter your birth year");
    var current = 2022 - year;
    console.log(current);
})
