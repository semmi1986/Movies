/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// задание 1
const $img = document.querySelectorAll('img');

$img.forEach(item => {
	item.remove();
});

//task 2
const $promoGenre = document.querySelector('.promo__genre');
$promoGenre.textContent = "ДРАМА";

//task 3 
const $promoBg = document.querySelector('.promo__bg');

$promoBg.style.background = "url('img/bg.jpg')";

//task 4

const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против..."
	]
};

movieDB.movies.sort();

//task5
const $promoList = document.querySelector('.promo__interactive-list');

$promoList.innerHTML = '';

movieDB.movies.forEach((item, i) => {
	$promoList.innerHTML += `
	<li class="promo__interactive-item">${i+1}. ${item}
		<div class="delete"></div>
	</li>
	`;
});