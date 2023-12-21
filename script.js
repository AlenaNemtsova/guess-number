'use strict';

//"Загадывание случайного числа от 1 до 100"

const isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

function guessNumber(num) {
    let count = 10;

    function compareNum() {
        if (count == 0) {
            confirm("Попытки закончились, хотите сыграть еще?") ? guessNumber(num) : null; return;
        }

        let inputNum = prompt("Угадай число от 1 до 100");

        if (inputNum === null) {
            alert("Игра окончена");
            return;
        }

        if (!isNumber(inputNum)) {
            alert("Введи число!");
            compareNum();
        }

        if (inputNum > num) {
            alert("Загаданное число меньше");
            count--;
            compareNum();
        }

        if (isNumber(inputNum) && inputNum < num) {
            alert("Загаданное число больше");
            count--;
            compareNum();
        }

        if (inputNum == num) {
            alert("Поздравляю, ты угадал!");
        }
    }
    compareNum();
}

guessNumber(13);



