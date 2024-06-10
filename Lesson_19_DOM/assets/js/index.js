// 1) HTML: є кнопка.
//     JS: При натисканні на кнопку змінити текст цієї кнопки.

const btnHelloWorld = document.querySelector('#btn-hw')

btnHelloWorld.onclick = () => {
  btnHelloWorld.textContent = 'World'
}

// HTML: є кнопка.
//     JS: При натисканні на кнопку змінити її колір.

const btnColor = document.querySelector('#btn-color')

btnColor.onclick = () => {
  btnColor.style.backgroundColor = 'green'
}

// HTML: є зображення.
//     JS: Зробити так, щоб при появі сторінки відображалася одна картинка, а при наведенні миші на неї відображалася інша.

const imgAdd = document.querySelector('#img-add')

imgAdd.onmouseenter = () => {
  imgAdd.src =
    'https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp'
}

const user = {
  firstName: 'Test',
  lastName: 'Testovych',
  profilePhoto:
    'https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp',
  birthday: new Date('2000-05-16'),
  nickname: 'super dev',
  likesCount: 10,
}

// при натисканні на кнопку "Завантажити" додати інфо про користувача в <article></article>

const addUser = document.querySelector('#add-user')

addUser.onclick = () => {
  const userCardHTML = `<article class="user-card">
	<img
	class="user-photo"
	src="${user.profilePhoto}"
	alt=""
	/>
	<div class="user-body">
	<h2 class="user-name">${user.firstName} ${user.lastName}</h2>
	<p title="" class="user-birthday">Birthday: ${user.birthday}</p>
	<p class="user-nick">Nicname: ${user.nickname}</p>
	<span><i class="like fa-solid fa-heart"></i>${user.likesCount}</span>
	</div>
	</article>`
  const container = document.querySelector('.container')
  container.insertAdjacentHTML('beforeend', userCardHTML)

  //при натисканні на сердечко перефарбувати його в червоний колір
  const like = document.querySelector('.like')
  like.onclick = () =>
    like.style.color === 'red'
      ? (like.style.color = 'black')
      : (like.style.color = 'red')

  //при наведенні на дату народження показувати кількість повних років.
  const userAge = document.querySelector('.user-birthday')
  userAge.onmouseenter = () => {
    userAge.title = `${
      new Date().getFullYear() - user.birthday.getFullYear()
    } age`
  }
}
