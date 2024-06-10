// Реалізувати клас Post (наприклад, описує пост в соц. мережі).

// Властивості:
// id,
// назва,
// автор,
// текст,
// дата додавання,
// кількість вподобайок,
// *зображення,
// *список хештегів,
// можна використати додаткові властивості за бажанням.

class Post {
  constructor(
    id,
    name,
    author,
    body,
    dateOfPublication,
    numberOfLikes,
    numberOfDislikes,
    image,
    listHashtags
  ) {
    this._id = id
    this._name = name
    this._author = author
    this._body = body
    this._dateOfPublication = dateOfPublication
    this._numberOfLikes = numberOfLikes
    this._numberOfDislikes = numberOfDislikes
    this._image = image
    this._listHashtags = listHashtags
  }

  //змінити текст поста на інший
  updateBody(body) {
    return (this._body = body)
  }

  //збільшити кількість вподобайок на 1 / зменшити кількість вподобайок на 1
  addLike() {
    return ++this._numberOfLikes
  }
  removeLike() {
    return --this._numberOfLikes
  }

  addDislike() {
    return ++this._numberOfDislikes
  }
  removeDislike() {
    return --this._numberOfDislikes
  }

  //render для отримання розмітки для посту (*в методі деструктуризувати інформацію з this).
  render() {
    const {
      _id,
      _name,
      _author,
      _body,
      _dateOfPublication,
      _numberOfLikes,
      _numberOfDislikes,
      _image,
      _listHashtags,
    } = this
    return ` 
      <article id="${_id}">
        <h2>${_name}</h2>
        <p>by ${_author}</p>
        <p>${_body}</p>
        <p>Published on: ${_dateOfPublication}</p>
        <p>Likes: ${_numberOfLikes} | Dislikes: ${_numberOfDislikes}</p>
        <img src="${_image}" alt="${_name}">
        <p>Hashtags: ${_listHashtags.join(", ")}</p>
      </article>
    `
  }

  //сеттер з валідацією для кількості вподобайок та відповідний ґеттер.
  setLikes(like) {
    if (typeof like !== "number") {
      throw new TypeError("Likes must be number")
    }
    if (!Number.isInteger(like) || like < 0 || like > Number.MAX_SAFE_INTEGER) {
      throw new RangeError("like must be nonnegative integer value")
    }
    return (this._numberOfLikes = like)
  }
  getLikes() {
    return this._numberOfLikes
  }

  //Для перевірки, чи належить кількість вподобайок певному діапазону, можна використати клас нижче
  likesDiapason(lowDiapason, hightDiapason) {
    return (
      this._numberOfLikes >= lowDiapason && this._numberOfLikes <= hightDiapason
    )
  }

  //додавання хештеґу. Хештеґів у поста може бути максимум 6. Можливі значення обмежені певним переліком (наприклад, ['web', 'javascript', 'fullstack', 'education', тощо]).
  addHashtags(hashtag) {
    const bannedWords = ["bla", "bloo", "bli"]

    if (bannedWords.includes(hashtag)) {
      throw new Error(`${hashtag} is a banned word!`)
    }

    if (!(this._listHashtags.length < 6)) {
      throw new Error("Maximum value exceeded. Maximum of 6 hashtags")
    }

    return this._listHashtags.push(`#${hashtag}`)
  }
}

const post1 = new Post(
  1,
  "Post",
  "Postovych",
  "Lorem inpsum",
  new Date(),
  90,
  80,
  "https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg",
  ["#list", "#post", "#Postovych"]
)

post1.updateBody("Rename body")
post1.addLike()
post1.addDislike()
post1.removeDislike()
post1.removeLike()
document.write(post1.render())

try {
  post1.setLikes(90)
} catch (error) {
  console.log(error)
}

console.log(post1.getLikes())
console.log(post1.likesDiapason(0, 90))
try {
  post1.addHashtags("fullstack")
  post1.addHashtags("addHashtag")
  post1.addHashtags("limit6")
  // post1.addHashtags("blfa")
} catch (error) {
  console.log(error)
}

//Створити масив постів (достатньо 2-3), тобто елементами масиву будуть екземпляри класу. Відрендерити ці пости (перебравши масив)
const arrPosts = [post1, post1]
arrPosts.forEach(el => document.write(el.render()))
