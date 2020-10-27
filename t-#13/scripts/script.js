
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

// главный объект программы
const personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
}
function start(obj) {

    let movNum = prompt('Сколько фильмов вы уже посмотрели?', '');
    while (isNaN(movNum) || movNum === null || movNum === '') {
        movNum = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    obj['count'] = movNum;

}
start(personalMovieDB);

// Добавляет moviesNum свойств к свойству ['movies'] к объекту obj
let addMovies = (obj, moviesNum) => {
    for (let i = 0; i < moviesNum; i++) {
        let movieName = prompt('Один из последних просмотренных фильмов?');
        // проверка на ошибку ввода
        while (movieName === null || movieName === '') {
            movieName = prompt('Один из последних просмотренных фильмов?');
        }
        let movieScore = prompt('На сколько оцените его?');
        // проверка на ошибку ввода
        while (isNaN(movieScore) || movieScore === null || movieScore === '' || movieScore < 0 || movieScore > 10) {
            movieScore = prompt('На сколько оцените его?');
        }
        obj['movies'][movieName] = movieScore;
    }
};

addMovies(personalMovieDB, 2);


function showMyDB(hidden, obj) {
    !hidden ? console.log(obj) : '';
}

showMyDB(personalMovieDB['privat'], personalMovieDB);

function writeYourGenres(obj) {
    for (let genreNumber = 1; genreNumber <= 3; genreNumber++) {
        let genre = prompt(`Ваш любимый жанр под номером ${genreNumber}`);
        while (!isNaN(genre) || genre === null || genre === '') {
            genre = prompt(`Ваш любимый жанр под номером ${genreNumber}`);
        }
        obj['genres'][genreNumber - 1] = genre;
    }
}

writeYourGenres(personalMovieDB);
console.log(personalMovieDB['genres']);