'use strict';

//"Загадывание случайного числа от 1 до 100"

function guessNumber(num) {
    let count = 10;

    function compareNum() {
        if (count == 0) {
            confirm("Попытки закончились, хотите сыграть еще?") ? guessNumber(num) : alert('Пока!'); return;
        }

        let inputNum = prompt("Угадай число от 1 до 100");

        if (inputNum === null) {
            alert("Игра окончена");
        } else if (isNaN(inputNum) || inputNum.trim() === '') {
            alert("Введи число!");
            compareNum();
        } else if (inputNum == num) {
            alert("Поздравляю, ты угадал!");
        } else if (inputNum > num) {
            alert("Загаданное число меньше");
            count--;
            console.log(count);
            compareNum();
        } else if (inputNum < num) {
            alert("Загаданное число больше");
            count--;
            console.log(count);
            compareNum();
        }
    }
    compareNum();
}

guessNumber(10);



