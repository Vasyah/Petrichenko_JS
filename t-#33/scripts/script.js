'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

const promoAdv = document.querySelector('.promo__adv');

const advImgs = promoAdv.querySelectorAll('img');

console.log(promoAdv.children);
advImgs.forEach( item => {
    item.remove();
});
// console.log(advImgs);

// и возьму все img, используя childNodes

const promoAdvChilds = function(){
    const arrImg = [];
    for(let i = 0; i < promoAdv.children.length; i++){
        arrImg[i] = promoAdv.children[0];
    }
    return arrImg;
}

console.log(promoAdvChilds());

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

document.querySelector('.promo__genre').innerHTML = 'Драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

const bgFilm = document.querySelector('.promo__bg');
// console.log(bg);
bgFilm.style.background = 'url("content_2.7b6857bf.jpg") center center/cover no-repeat';
// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// // 5) Добавить нумерацию выведенных фильмов */