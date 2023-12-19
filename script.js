'use strict';

//"Загадывание случайного числа от 1 до 100"

function guessNumber(num) {
    function compareNum() {
        let inputNum = prompt("Угадай число от 1 до 100");
        console.log(inputNum, typeof inputNum)
        if (inputNum === null) {
            alert("Игра окончена");
        } else if (isNaN(inputNum) || inputNum.trim() === '') {
            alert("Введи число!");
            compareNum();
        } else if (inputNum == num) {
            alert("Поздравляю, ты угадал!");
        } else if (inputNum > num) {
            alert("Загаданное число меньше");
            compareNum();
        } else if (inputNum < num) {
            alert("Загаданное число больше");
            compareNum();
        }
    }
    compareNum();
}

guessNumber(10);



