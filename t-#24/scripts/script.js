// В этом уроке все внешние функции необходимо адаптировать под методы основного объекта

// главный объект программы это база днных для фильмов
const personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    // methods
    start() {
        let movNum = prompt('Сколько фильмов вы уже посмотрели?', '');
        while (isNaN(movNum) || movNum === null || movNum === '') {
            movNum = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        this['count'] = movNum;
        this.detectPersonalLevel();
    },
    detectPersonalLevel() {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        }
        else if (this.count >= 10 && this.count < 30) {
            console.log('Вы классический зритель');
        }
        else if (this.count >= 30) {
            console.log('Вы киноман');
        }
        else {
            console.log('Произошла ошибка');
        }
    },
    // Добавляет moviesNum свойств к свойству ['movies'] 
    addMoviestoDB(moviesNum) {
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
            this['movies'][movieName] = movieScore;
        };
    },
    writeYourGenres() {
        for (let genreNumber = 1; genreNumber <= 3; genreNumber++) {
            let genre = prompt(`Ваш любимый жанр под номером ${genreNumber}`);
            while (!isNaN(genre) || genre === null || genre === '') {
                genre = prompt(`Ваш любимый жанр под номером ${genreNumber}`);
            }
            this['genres'][genreNumber - 1] = genre;
        }
        this['genres'].forEach((item, index) => {
            console.log(`${index + 1} - это ${item}`);
        })
    },
    showMyDB() {
        this.privat ? console.log('DB is Locked') : console.log(this);;
    },
    toggleVisibleDB() {
        if (this.privat) {
            this.privat = false;
        }
        else {
            this.privat = true;
        }
    },
}

// personalMovieDB.start();
// personalMovieDB.addMoviestoDB(2);
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();
// console.log(personalMovieDB.count);



let mouse = [1, 2, 3, 4, 5];
let cat = [1, 2, 3, 4, 5];

console.log(mouse[0] === cat[0]);