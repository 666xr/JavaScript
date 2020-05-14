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

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

      /* personalMovieDB.movies.a = b; */
      personalMovieDB.movies[a] = b;


      console.log(personalMovieDB);