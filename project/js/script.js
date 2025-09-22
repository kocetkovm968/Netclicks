//переменная для блока где все карточки
const cardWrapper = document.querySelector('.content-cards');

//переменная для поля Input
const searchInput = document.getElementById('search - input');

//переменная для кнопки поиска значения указанного в поле Input
const searchButton = document.getElementById('search-button');

//переменаня для массива карточек фильмов
const films = [
  {
    id: 0,
    title: 'Марсианин 1',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.8,
    link: 'film.html',
    image: 'img/card-1.jpg'
  },
  {
    id: 1,
    title: 'Марсианин 2',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.8,
    link: 'film.html',
    image: 'img/card-1.jpg'
  },
  {
    id: 2,
    title: 'Марсианин 3',
    original: 'The Martian 2015',
    category: 'Фантастика, приключения',
    rating: 7.8,
    link: 'film.html',
    image: 'img/card-1.jpg'
  }
]

//функция для заполнения карточек из указанного массива(array)
const render = (array) => {
  cardWrapper.innerHTML = '' //очищаем блок с карточками

  //функция для перебора массива и поиска элементов(item) массива  
  array.forEach((item) => {
    //метод для вставки HTML элементов в блок с карточками перед закрывающим тегом данного блока
    cardWrapper.insertAdjacentHTML('beforeend', `
      <a href="${item.link}" class="content-cards__item">
        <div class="content-cards__item--img">
          <img src="${item.image}" alt="film">
        </div>

        <div class="content-cards__item--title">
          <h5>${item.title},</h5>
          <span>${item.original}</span>
        </div>
        <p class="content-cards__item--descr">${item.category}</p>
        <p class="content-cards__item--rating">${item.rating}</p>
      </a>
    `)
  })
}

//добавляем обработчик событий по клику
searchButton.addEventListener('click', () => {
  /* функция render выведет на экран карточки фильмов =>
  название которых совпадает со значением введенным в поле Input */
  render(films.filter((item) => item.title.includes(searchInput.value)))
})

/* запускаем функцию render, которая при загрузке старницы
(иа-за films в скобках) выведет все карточки из массива */
render(films)