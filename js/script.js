/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок 2:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 

"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

document.addEventListener('DOMContentLoaded', () => { //Для прорисовки и построения тегов в дом дереве.

	// tack 1
	const $img = document.querySelectorAll('.promo__adv img'), // tack 1
		$promoGenre = document.querySelector('.promo__genre'), //task 2
		$promoBg = document.querySelector('.promo__bg'), //task 3 
		$promoList = document.querySelector('.promo__interactive-list'), //task5
		$form = document.querySelector('.add'),
		$check = document.querySelector('[type="checkbox"]'),
		$deleteFilm = document.querySelectorAll('.delete'),
		$newFilm = document.querySelector('.adding__input');
	console.log($check);

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
	const deleteReclama = (adv) => {
		adv.forEach(item => {
			item.remove();
		});
	};

	//task 2
	$promoGenre.textContent = "ДРАМА";

	//task 3 
	$promoBg.style.backgroundImage = "url('img/bg.jpg')";

	//task 4
	const sortFilms = (arr) => {
		arr.sort();
	};

	//task5
	const addFilm = (films, promo) => {
		promo.innerHTML = '';

		//task2.5
		sortFilms(films);

		films.forEach((item, i) => {
			promo.innerHTML += `
				<li class="promo__interactive-item">${i+1}. ${item}
					<div class="delete"></div>
				</li>
		`;
		});

		//task 2.3
		document.querySelectorAll('.delete').forEach((itemDel, key) => {
			itemDel.addEventListener('click', () => {
				itemDel.parentElement.remove();
				movieDB.movies.splice(key, 1);

				addFilm(movieDB.movies, $promoList);

			});
		});

	};



	//task 2.1
	$form.addEventListener('submit', (e) => {
		e.preventDefault();

		let filmOutInput = $newFilm.value;
		const checkd = $check.checked;


		if (filmOutInput) {
			//task 2.2
			if (filmOutInput.length > 21) {

				filmOutInput = `${filmOutInput.substring(0,22)}...`;
			}

			//task2.4
			if (checkd) {
				console.log("this is your lave film");
			}

			movieDB.movies.push(filmOutInput);
			sortFilms(movieDB.movies);
			addFilm(movieDB.movies, $promoList);
		}

		$form.reset();
	});

	deleteReclama($img);

	addFilm(movieDB.movies, $promoList);

});