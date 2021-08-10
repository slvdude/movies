'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const img = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        bg = document.querySelector('.promo__bg'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        formInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');
        
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newMovie = formInput.value;
        const favourite = checkbox.checked;
      
        if(newMovie) {

            if(newMovie.length > 21) {
                newMovie = `${newMovie.substring(0, 22)}...`;
            }

            if(favourite) {
                console.log('Добавлен любимый фильм!');
            }
            movieDB.movies.push(newMovie);
            createList(movieList, movieDB.movies);

        }
        e.target.reset();
    });

    const sortArr = (arr) => {
        arr.sort();
    };

    const deleteAdv = (arr) => {
        arr.forEach((item) => {
            item.remove();
        }); 
    };

    const makeChanges = () => {
        bg.style.backgroundImage = 'url(img/bg.jpg)';
        genre.textContent = 'Драма';
    };

    function createList(list, movieArr) {
        list.innerHTML = '';
        sortArr(movieArr);
        movieArr.forEach((item, index, arr) => {
            movieList.innerHTML += `<li class="promo__interactive-item">
                ${index + 1}) ${item}
            <div class="delete"></div> </li>`;
        });
        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                movieArr.splice(i, 1);
                createList(list, movieArr);
                console.log(movieArr);
            });
        });
    }

    makeChanges();
    deleteAdv(img);
    createList(movieList, movieDB.movies);
});









