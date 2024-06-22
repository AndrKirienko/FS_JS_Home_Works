'use strick'

const PHOTO_URL = 'https://dog.ceo/api/breeds/image/random'

const btnRandomPhoto = document.querySelector('#random-photo')

btnRandomPhoto.onclick = () => {
  fetch(PHOTO_URL)
    .then(response => response.json())
    .then(data => addPhoto(data))
    .catch(error => console.log(error))

  function addPhoto(photo) {
    const photoIMG = document.querySelector('#here-is-a-photo')
    photoIMG.innerHTML = `<img class="random-photo" src="${photo.message}" alt="${photo.status}">`
  }
}
