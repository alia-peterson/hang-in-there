// query selector variables go here 👇
var randomPosterButton = document.querySelector('.show-random')
var posterFormButton = document.querySelector('.show-form')
var posterFormBackButton = document.querySelector('.show-main')
var saveThisPosterButton = document.querySelector('.save-poster')
var showSavedPostersButton = document.querySelector('.show-saved')
var backToMainButton = document.querySelector('.back-to-main')
var showMyPosterButton = document.querySelector('.make-poster')

var mainTitle = document.querySelector('.poster-title')
var mainImageURL = document.querySelector('.poster-img')
var mainQuote = document.querySelector('.poster-quote')

var mainPosterView = document.querySelector('.main-poster')
var posterFormView = document.querySelector('.poster-form')
var savedPostersView = document.querySelector('.saved-posters')

var posterGrid = document.querySelector('.saved-posters-grid')

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
]
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
]
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
]

var savedPosters = []
var currentPoster

// event listeners go here 👇
window.addEventListener('load', displayRandomPoster)

randomPosterButton.addEventListener('click', displayRandomPoster)

mainPosterView.addEventListener('click', randomizeElement)

showMyPosterButton.addEventListener('click', function() {
  event.preventDefault()
  createCustomPoster()
})

posterFormButton.addEventListener('click', switchViewPosterForm)

posterFormBackButton.addEventListener('click', switchViewPosterForm)

backToMainButton.addEventListener('click', switchViewSavedPosters)

showSavedPostersButton.addEventListener('click', function() {
  switchViewSavedPosters()
  insertSavedPosterHTML()
  addMiniPosterListener()
})

saveThisPosterButton.addEventListener('click', savePoster)

// functions and event handlers go here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function displayRandomPoster() {
  randomizePoster()
  displayPoster()
}

function displayPoster() {
  mainImageURL.src = currentPoster.imageURL
  mainTitle.innerText = currentPoster.title
  mainQuote.innerText = currentPoster.quote
}

function randomizePoster() {
  var randomImageURL = images[getRandomIndex(images)]
  var randomTitle = titles[getRandomIndex(titles)]
  var randomQuote = quotes[getRandomIndex(quotes)]

  currentPoster = new Poster(randomImageURL, randomTitle, randomQuote)
}

function savePoster() {
  if (savedPosters.length === 0 || (savedPosters[savedPosters.length - 1].id !== currentPoster.id)) {
    savedPosters.push(currentPoster)
  }
}

function switchViewSavedPosters() {
  mainPosterView.classList.toggle('hidden')
  savedPostersView.classList.toggle('hidden')
}

function switchViewPosterForm() {
  mainPosterView.classList.toggle('hidden')
  posterFormView.classList.toggle('hidden')
}

function addMiniPosterListener() {
  var miniPosters = document.querySelectorAll('.mini-poster')

  for (var i = 0; i < miniPosters.length; i++) {
    miniPosters[i].addEventListener('dblclick', deleteMiniPoster)
  }
}

function createCustomPoster() {
  var userImageURL = document.getElementById('poster-image-url').value
  var userTitle = document.getElementById('poster-title').value
  var userQuote = document.getElementById('poster-quote').value

  if (validateForm(userImageURL, userTitle, userQuote)) {
    images.push(userImageURL)
    titles.push(userTitle)
    quotes.push(userQuote)

    currentPoster = new Poster(userImageURL, userTitle, userQuote)
    displayPoster()
    switchViewPosterForm()
  }
}

function deleteMiniPoster() {
  var thisPosterID

  if (event.target.id){
    thisPosterID = event.target.id
  } else {
    thisPosterID = event.target.parentElement.id
  }

  for (var j = 0; j < savedPosters.length; j++) {
    if (savedPosters[j].id == thisPosterID){
      savedPosters.splice(j, 1)
    }
  }

  if (event.target.classList.contains('mini-poster')) {
    event.target.classList.add('hidden')
  } else {
    event.target.parentElement.classList.add('hidden')
  }
}

function insertSavedPosterHTML() {
  posterGrid.innerHTML = ``
  for (var i = 0; i < savedPosters.length; i++) {
    posterGrid.innerHTML += `
    <article class="mini-poster" id=${savedPosters[i].id}>
    <img src="${savedPosters[i].imageURL}" alt="poster image">
    <h2>${savedPosters[i].title}</h2>
    <h4>${savedPosters[i].quote}</h4>
    </article>
    `
  }
}

function validateForm(userImageURL, userTitle, userQuote) {
  if (!userImageURL || !userTitle || !userQuote) {
    alert('All fields must be filled out')
    return false
  } else if (!userImageURL.includes('jpeg') && !userImageURL.includes('png') && !userImageURL.includes('gif') && !userImageURL.includes('jpg')) {
    alert('Please enter a valid image URL\nFile type must be .jpeg, .jpg, .png, or .gif')
    return false
  }
  return true
}

function randomizeElement() {
  var randomImageURL = images[getRandomIndex(images)]
  var randomTitle = titles[getRandomIndex(titles)]
  var randomQuote = quotes[getRandomIndex(quotes)]

  if (event.target === mainImageURL) {
    currentPoster = new Poster(randomImageURL, mainTitle.innerText, mainQuote.innerText)
  } else if (event.target === mainTitle) {
    currentPoster = new Poster(mainImageURL.src, randomTitle, mainQuote.innerText)
  } else if (event.target === mainQuote) {
    currentPoster = new Poster(mainImageURL.src, mainTitle.innerText, randomQuote)
  }
  displayPoster()
}
