class Poster {
  constructor(imageURL, title, quote) {
    this.id = Date.now();
    this.imageURL = imageURL;
    this.title = title;
    this.quote = quote;
  }
  randomize() {
    this.imageURL = images[getRandomIndex(images)]
    this.title = titles[getRandomIndex(titles)]
    this.quote = quotes[getRandomIndex(quotes)]
  }
}
