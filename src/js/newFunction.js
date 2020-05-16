"use strict";

/* a = 10;
console.log(a);

let box = 1000;
    console.log(box);

    box = 100;
    console.log(box);


const number = 4.44;
console.log(number);

console.log(4 / 0);
console.log(-4 / 0);
console.log('string' * 9);

const person = 'Andrea sdfsdmamd lmaddw';
const string = `444`;

const bool = false; */ /* true/false */

/* console.log(something); */ /* is not defined - null */

/* let empty;
console.log(empty); */  /* undefined */

/* 
const obj = {
    name: 'Franco';
    age: 35;
    isMarried: true;
}; */

/* console.log(obj.name); */

/* console.log(obj['name']);

            0           1      2     3      4   5
let arr = ['Franco', 'Andrea', 6, 'Tommie', {}, []];
console.log(arr[0]);
console.log(arr[5]);
console.log(arr[4]);
console.log(arr[1]);
console.log(arr[3]);
console.log(arr[2]); */

/* let number = 100;

prompt(number);
alert(1); */

/* const result = confirm('Are you here?');
console.log(result); */

/* const answer = prompt('Вам есть 18?', '18');
console.log(typeof(answer)); */

/* Вся информация которая приходит от пользователя - это будет строка! (promt, confirm) */

/* const answer = prompt('Вам есть 18?', '18');
console.log(answer + 5); */
/* const answer = +prompt('Вам есть 18?', '18');
console.log(answer + 5); */

/* const answers = [];
 */
/* answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваше фамилия?', '');
answers[2] = prompt('Сколько вам лет?', ''); */

/* console.log(typeof(answers));
console.log(typeof(null)); Это Официально признанная ошибка то что null - это не обьект, а тип данных! */

/* 
console.log(numberOfFilms);




        if (4 == 9) {
        console.log('ok!');
      } else {
        console.log('Error');
      }


        if (4) {
        console.log('ok!');
    } else {
        console.log('Error');
    }
 */

/*  */
/*     if (num < 49) { */
/*         console.log('error'); */
/*     } else if (num > 100) { */
/*         console.log('слишком много!'); */
/*     } else { */
/*         console.log('Ok!'); */
/*     } */
/*  */
/*     (num === 50) ? console.log('ok!') : console.log('error'); */  // Тернарный оператор - ?


/*     const ternar = 777;
    (ternar == 666) ? console.log('kek') : console.log('no kek!'); */

/*     4 + 4 (бинарный аргумент +)
    +'4' (унарный аргумент) */

/*     const num = '50';

    switch (num) {
        case '49':
            console.log('Неверно');
        break;
        case '100':
            console.log('Неверно');
        break;
        case '50':
            console.log('верно');
            break;
        default: 
            console.log('Не в этот раз!');
    } */


   // let num = 50;
/* 
    while (num <= 55) {
        console.log(num);
        num++
    } */

/*     do {
        console.log(num)
        num++
    } */

/*     while (num < 55) */
/* 
    for (let i = 0; i < 8; i++) {
        console.log(num)
        num++
    } */


/*     && - и
    || - или

    for (let i = 1; i < 10; i++) {
        if (i === 6) {
            //break;
            continue;
        }
        console.log(i);
    }


    Сколько фильмов вы уже посмотрели?
    Один из последних просмотренных фильмов?
    На сколько оцените его?
 */
 

/*  do {
     const a = promt('Сколько фильмов вы уже посмотрели?', '');
     const b = prompt('Один из последних просмотренных фильмов?', '');
     const c = prompt('На сколько оцените его?', '');
 }

 while () */





      //personalMovieDB.movies.a = b;

/*       const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 

      const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
 */
    
/*       for (let i = 0; i < 1; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', ''); 
              

            if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
      }

