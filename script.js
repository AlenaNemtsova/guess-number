'use strict';

//"Загадывание случайного числа от 1 до 100"

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

        if (isNaN(inputNum) || inputNum.trim() === '') {
            alert("Введи число!");
            compareNum();
        }
        if (inputNum > num) {
            alert("Загаданное число меньше");
            count--;
            compareNum();
        }

        if (inputNum < num) {
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



