use('cinema')

//TODO Додайте нові фільми до колекції movies, щоб загальна кількість фільмів була не менше 7.
db.movies.insertMany([
  {
    title: 'The Intouchables',
    genre: 'Comedy Drama',
    director: 'Olivier Nakache & Éric Toledano',
    releaseYear: 2011,
    duration: 112,
    ratings: [
      { reviewer: 'Sophia Lee', score: 9 },
      { reviewer: 'Jake Anderson', score: 8 },
    ],
    cast: ['François Cluzet', 'Omar Sy', 'Anne Le Ny'],
    boxOffice: {
      budget: 10500000,
      revenue: 426600000,
    },
    country: 'France',
    tags: ['friendship', 'inspiring', 'uplifting'],
  },

  {
    title: 'Crouching Tiger',
    genre: 'Martial Arts',
    director: 'Ang Lee',
    releaseYear: 2000,
    duration: 120,
    ratings: [
      { reviewer: 'Ella Collins', score: 10 },
      { reviewer: 'Victor Green', score: 9 },
    ],
    cast: ['Chow Yun-Fat', 'Michelle Yeoh', 'Zhang Ziyi'],
    boxOffice: {
      budget: 17000000,
      revenue: 213500000,
    },
    country: 'China',
    tags: ['epic', 'fantasy', 'romance'],
  },

  {
    title: 'City of God',
    genre: 'Crime Drama',
    director: 'Fernando Meirelles & Kátia Lund',
    releaseYear: 2002,
    duration: 130,
    ratings: [
      { reviewer: 'Carlos Silva', score: 9 },
      { reviewer: 'Ana Rodrigues', score: 10 },
    ],
    cast: ['Alexandre Rodrigues', 'Leandro Firmino', 'Phellipe Haagensen'],
    boxOffice: {
      budget: 3300000,
      revenue: 30600000,
    },
    country: 'Brazil',
    tags: ['gangs', 'violence', 'realism'],
  },

  {
    title: 'Pan’s Labyrinth',
    genre: 'Fantasy',
    director: 'Guillermo del Toro',
    releaseYear: 2006,
    duration: 118,
    ratings: [
      { reviewer: 'Natalie Foster', score: 10 },
      { reviewer: 'Oscar Morales', score: 9 },
    ],
    cast: ['Ivana Baquero', 'Ariadna Gil', 'Sergi López'],
    boxOffice: {
      budget: 19000000,
      revenue: 83500000,
    },
    country: 'Spain',
    tags: ['dark fantasy', 'fairy tale', 'war'],
  },

  {
    title: 'Oldboy',
    genre: 'Thriller',
    director: 'Park Chan-wook',
    releaseYear: 2003,
    duration: 120,
    ratings: [
      { reviewer: 'Tom Wright', score: 9 },
      { reviewer: 'Hanna Kim', score: 10 },
    ],
    cast: ['Choi Min-sik', 'Yoo Ji-tae', 'Kang Hye-jung'],
    boxOffice: {
      budget: 3000000,
      revenue: 15000000,
    },
    country: 'South Korea',
    tags: ['revenge', 'psychological', 'mystery'],
  },
])

//TODO Відсортувати фільми за тривалістю у зростаючому порядку та показати тільки назву та тривалість.
db.movies.find({}, { _id: 0, title: 1, duration: 1 }).sort({ duration: 1 })

//TODO Отримати другу сторінку при перегляді по 3 фільми на сторінці, впорядкувавши за роком випуску від найновіших до найстаріших.
db.movies
  .find({}, { _id: 0, title: 1, releaseYear: 1 })
  .sort({ releaseYear: -1 })
  .limit(3)
  .skip(3)

//TODO Знайдіть усі фільми в жанрі "Sci-Fi", * випущені після 2000 року.
db.movies.find(
  { genre: 'Sci-Fi', releaseYear: { $gt: 2000 } },
  { _id: 0, title: 1, releaseYear: 1 },
)

//TODO Знайти всі фільми, випущені після 2000 року, і показати тільки їх назву, режисера та рік випуску.
db.movies.find(
  { releaseYear: { $gt: 2000 } },
  { _id: 0, title: 1, director: 1, releaseYear: 1 },
)

//TODO *Знайти фільми режисера "Christopher Nolan", тривалість яких перевищує 150 хвилин.
db.movies.find(
  { director: 'Christopher Nolan', duration: { $lt: 150 } },
  { _id: 0, title: 1, duration: 1, director: 1 },
)

//TODO *Показати другу сторінку результатів для фільмів у жанрі "Action", з 2 фільмами на сторінку.
db.movies
  .find({ genre: 'Action' }, { _id: 0, title: 1, genre: 1 })
  .limit(2)
  .skip(2)

//TODO *Відобразити фільми з бюджетом, більше 10 млн.
db.movies.aggregate([
  { $match: { 'boxOffice.budget': { $gt: 10000000 } } },
  {
    $project: {
      _id: 0,
      title: 1,
      budget: '$boxOffice.budget',
    },
  },
])

//TODO *Відобразити фільми з тегами 'thriller' та 'superhero'
db.movies.find(
  { tags: { $all: ['thriller', 'superhero'] } },
  { _id: 0, title: 1, tags: 1 },
)

//TODO Оновити тривалість фільму "Inception" до 150 хвилин.
db.movies.updateOne({ title: 'Inception' }, { $set: { duration: 150 } })

//TODO *Додати новий тег "blockbuster" до фільму "The Dark Knight". (оператор $push)
db.movies.updateOne(
  { title: 'The Dark Knight' },
  { $push: { tags: 'blockbuster' } },
)

//TODO Видалити фільм "The Godfather" з колекції.
db.movies.deleteOne({ title: 'The Godfather' })

//TODO * Видалити всі фільми, випущені до 2000 року.
db.movies.deleteMany({ releaseYear: { $lt: 2001 } })

//TODO *Підрахуйте середню тривалість фільмів у кожному жанрі.
db.movies.aggregate([
  {
    $group: {
      _id: '$genre',
      averageDuration: { $avg: '$duration' },
    },
  },
])

//TODO * Знайдіть жанр із найбільшою кількістю фільмів.
db.movies.aggregate([
  {
    $group: {
      _id: '$genre',
      count: { $sum: 1 },
    },
  },
  { $sort: { count: -1 } },
  { $limit: 1 },
])

//TODO * Підрахуйте загальні збори(revenue) фільмів за країнами.
db.movies.aggregate([
  {
    $group: {
      _id: '$country',
      totalRevenue: { $sum: '$boxOffice.revenue' },
    },
  },
])

//TODO *Підрахувати кількість фільмів, знятих в кожній країні після 2010 року.
db.movies.aggregate([
  { $match: { releaseYear: { $gt: 2010 } } },
  {
    $group: {
      _id: '$country',
      count: { $sum: 1 },
    },
  },
])
