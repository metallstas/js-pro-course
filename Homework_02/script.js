// 1
// Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зарезолвится (то есть выполнится успешно).

function promiseResolve() {
  const res = new Promise((res, rej) => {
    return setTimeout(() => {
      console.log('Прошло 3 секунды')
      return res('resolve')
    }, 3000)
  })
  return res
}

// console.log(promiseResolve())

// 2
// Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зареджектится (то есть выполнится с ошибкой).

function promiseRejected() {
  const rejected = new Promise((res, rej) => {
    return setTimeout(() => {
      return rej('error')
    }, 3000)
  })
  return rejected
}

// console.log(promiseRejected())

// 3
// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.

function showSummPromise() {
  function randomDelay() {
    let delay = Math.ceil(Math.random() * 5)
    return delay
  }

  function showSumm(content) {
    const summ = document.createElement('h1')
    summ.textContent = content
    summ.style.textAlign = 'center'
    summ.style.fontSize = '10rem'
    document.body.prepend(summ)
  }

  const randomDelays = [randomDelay(), randomDelay(), randomDelay()]

  const results = randomDelays.map(el =>
      new Promise((resolve, rejected) => {
        setTimeout(() => {
          return resolve(el)
        }, el * 1000)
      })
  )

  console.log(results)

  const summDelay = Promise.all(results)
    .then((responses) => responses.reduce((acc, el) => acc + el, 0))
    .then((summ) => showSumm(summ))
}

// showSummPromise()

// 4
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, Отфильтровать массив пользователей, чтобы остались только пользователи с четными id.

function evenUser() {
  function filteredUsers(arr) {
    const users = arr.filter((el) => {
      return el.id % 2 === 0 ? el : null
    })
    return users
  }

  async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    console.log(filteredUsers(users))
  }

  getUsers()
}

// evenUser()

// 5
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, вывести список карточек пользователей, отобразить имя, телефон и остальную информацию каждого пользователя. Вывести в html внутри div с id = 1

// 6
// Дополнить задание 5. Добавить инпут и кнопку Поиск. Сделать так, чтобы по нажатию на кнопку поиска списке оставались только те карточки, которые соответствуют введенному тексту (фильтрацию проводить по имени, телефону, email).

function cardsUsers() {
  const wrapper = document.getElementById('1')
  const search = document.createElement('input')
  const cardWrapp = document.createElement('div')
  const btn = document.createElement('button')
  const searchBlock = document.createElement('div')

  cardWrapp.classList.add('cardWrap')
  searchBlock.classList.add('searchBlock')

  btn.textContent = 'Поиск'
  searchBlock.append(search, btn)
  wrapper.prepend(searchBlock)

  function searchUser(user, searchValue) {
    const name = user.name.toLowerCase()
    const value = searchValue.toLowerCase()
    const email = user.email.toLowerCase()
    const checkUsers =
      name.includes(value) ||
      user.phone.includes(value) ||
      email.includes(value)

    if (checkUsers) {
      return user
    }
  }

  function createCardUser({ name, phone, email, address, company }) {
    const card = document.createElement('div')
    const nameUser = document.createElement('h2')
    const phoneUser = document.createElement('p')
    const emailUser = document.createElement('p')
    const adressUser = document.createElement('p')
    const companyUser = document.createElement('p')

    card.classList.add('card')

    nameUser.textContent = name
    phoneUser.innerHTML = `<strong>Phone</strong>: ${phone}`
    emailUser.textContent = email
    adressUser.innerHTML = `<strong>Adress</strong>: ${address.city}, ${address.street}, ${address.suite}`
    companyUser.innerHTML = `<strong>Company</strong>: ${company.name}`

    card.append(nameUser, phoneUser, emailUser, adressUser, companyUser)
    cardWrapp.append(card)
    wrapper.append(cardWrapp)
  }

  function renderUsersCards(arr) {
    arr.map(user => createCardUser(user))
    search.addEventListener('change', (e) => {
      if (!e.target.value) {
        cardWrapp.innerHTML = ''
        arr.map(user => createCardUser(user))
        return
      }

      cardWrapp.innerHTML = ''
      const filteredUsers = arr.filter((user) =>
        searchUser(user, e.target.value)
      )
      if (filteredUsers.length !== 0) {
        filteredUsers.map(user => createCardUser(user))
        return
      }

      cardWrapp.innerHTML = '<h1>Таких пользователей не существует</h1>'
    })
  }

  async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    renderUsersCards(users)
  }

  getUsers()
}

// cardsUsers()

// 7
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/${userId}/todos, userId получить при помощи prompt. Вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет (чекбокс). Вывести в html внутри div с id = 2

function todo() {
  const wrapper = document.getElementById('2')

  function userId() {
    let id = prompt('Id Пользователя от 1 до 10')
    if (!Number.isInteger(+id)) {
      alert('Введите пожалуйста число от 1 до 10')
      return userId()
    } else if (+id < 10 && +id > 0) {
      return id
    } else {
      alert('Введите пожалуйста число от 1 до 10')
      return userId()
    }
  }

  function showTodo(arr) {
    const todoList = document.createElement('ul')
    todoList.classList.add('todoList')
    const title = document.createElement('h1')
    title.textContent = `Todo list userID ${arr[0].userId}`
    wrapper.append(title)

    arr.forEach((el, index) => {
      const todoItem = document.createElement('li')
      const titleTodo = document.createElement('p')
      const completed = document.createElement('input')
      titleTodo.textContent = `${index + 1}. ${el.title}`
      completed.type = 'checkbox'
      completed.checked = el.completed
      todoItem.append(titleTodo, completed)
      todoList.append(todoItem)
      wrapper.append(todoList)
    })
  }

  async function getTasks(userId) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId()}/todos`
    )
    const tasks = await response.json()
    showTodo(tasks)
  }

  getTasks(userId)
}

// todo()

// 8
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums/1/photos, вывести фотографии, используя тег img. В качестве src для img использовать поле url в объекте фото
// {
//   "albumId": 1,
//   "id": 4,
//   "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//   "url": "https://via.placeholder.com/600/d32776",
//   "thumbnailUrl": "https://via.placeholder.com/150/d32776"
// },
// Дополнительно сделать, чтобы по нажатию на картинку картинка увеличивалась в размерах, повторное нажатие вернет картинку к исходному размеру. Вывести в html внутри div с id = 3

function usersPhoto() {
  const wrapper = document.getElementById('3')
  const wrapPhotos = document.createElement('div')
  const divBackground = document.createElement('div')
  wrapPhotos.classList.add('cardWrap')
  document.body.append(divBackground)

  wrapper.addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
      divBackground.classList.add('back')
      const img = e.target.cloneNode()
      img.classList.remove('photo')
      divBackground.append(img)
    }
  })

  divBackground.addEventListener('click', () => {
    divBackground.classList.remove('back')
    divBackground.innerHTML = ''
  })

  function showPhoto(arrPhotos) {
    arrPhotos.forEach(photo => {
      const img = document.createElement('img')
      img.src = photo.url
      img.classList.add('photo')
      wrapPhotos.append(img)
      wrapper.append(wrapPhotos)
    })
  }

  async function getPhotos() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/1/photos`
    )
    const photos = await response.json()
    showPhoto(photos)
  }

  getPhotos()
}

// usersPhoto()

// 9
// Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums, Отобразить список альбомов и сделать там, чтобы по нажатию на альбом вместа списка альбомов отобразились фотографии, которые относяться к этому альбому(https://jsonplaceholder.typicode.com/photos). В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов. Вывести в html внутри div с id = 4

function albumList() {
  const wrapper = document.getElementById('4')

  async function getAlbumsPhoto(userId) {
    if (userId) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${userId}/photos`
      )
      const data = await response.json()
      showPhotos(data)
    } else {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums`
      )
      const data = await response.json()
      showAlbums(data)
    }
  }

  getAlbumsPhoto()

  function albumClickHandler(e) {
    if (e.target.tagName === 'LI') {
      wrapper.innerHTML = ''
      getAlbumsPhoto(e.target.dataset.userId)
    }
  }

  function showPhotos(Photos) {
    const btnBack = document.createElement('button')
    const wrapPhoto = document.createElement('div')
    wrapPhoto.classList.add('wrapPhoto')
    btnBack.textContent = 'Назад'
    wrapper.prepend(btnBack)

    btnBack.addEventListener('click', () => {
      wrapper.innerHTML = ''
      getAlbumsPhoto()
    })
    Photos.forEach((photo) => {
      const img = document.createElement('img')

      img.src = photo.url
      img.classList.add('photo')
      wrapPhoto.append(img)
      wrapper.append(wrapPhoto)
    })
  }

  function showAlbums(albums) {
    const todoList = document.createElement('ul')
    todoList.addEventListener('click', albumClickHandler)
    todoList.classList.add('todoList')
    const title = document.createElement('h1')
    title.textContent = `Albums`
    wrapper.append(title)

    albums.forEach((el, index) => {
      const todoItem = document.createElement('li')
      todoItem.dataset.userId = el.userId
      todoItem.textContent = `${index + 1}. ${el.title}`
      todoList.append(todoItem)
      wrapper.append(todoList)
    })
  }
}

// albumList()
