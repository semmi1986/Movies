/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// tack 1
const $img = document.querySelectorAll('.promo__adv img'), // tack 1
	$promoGenre = document.querySelector('.promo__genre'), //task 2
	$promoBg = document.querySelector('.promo__bg'), //task 3 
	$promoList = document.querySelector('.promo__interactive-list'); //task5

const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против..."
	]
};

// tack 1
$img.forEach(item => {
	item.remove();
});

//task 2
$promoGenre.textContent = "ДРАМА";

//task 3 
$promoBg.style.background = "url('img/bg.jpg')";

//task 4
movieDB.movies.sort();


//task5
$promoList.innerHTML = '';

movieDB.movies.forEach((item, i) => {
	$promoList.innerHTML += `
	<li class="promo__interactive-item">${i+1}. ${item}
		<div class="delete"></div>
	</li>
	`;
});