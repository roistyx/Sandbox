class MovieSearcher {
  constructor() {
    this.page = 1;
    this.apiKey = "87dd0709";
    this.searchType = "movie";
    this.searchQuery = "";

    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();

      this.runSearch();
    });
  }

  async getMovies() {
    try {
      const url =
        "https://www.omdbapi.com/?apikey=" +
        this.apiKey +
        "&type=" +
        this.searchType +
        "&s=" +
        this.searchQuery +
        "&page=" +
        this.page;

      // console.log("URL:", url);

      const response = await fetch(url);
      const results = await response.json();
      console.log("Got movie search results",results.Search)

      return results.Search;
    } catch (error) {
      return [];
    }
  }

  async runSearch() {
    this.searchQuery = document.getElementById("search-input").value;

    const results = await this.getMovies();

    const container = document.getElementById("movies-container");

    const movieObjects = [];
    results.forEach((item) => {
      const movie = new Movie(item);
      movieObjects.push(movie);
      const card = movie.createMovieCard();

      container.appendChild(card);

      // console.log("Generated cards",card)
    });
  }
}

class Movie {
  constructor(movieObject) {
    this.apiKey = "87dd0709";
    this.title = movieObject.Title;
    this.poster = movieObject.Poster;
    this.id = movieObject.imdbID;
    
  }
  

  createMovieCard() {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.classList.add("custom-card");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", this.poster);
    cardImg.classList.add("card-img-top");

    const bodyDiv = document.createElement("div");
    bodyDiv.classList.add("card-body");

    const h5Title = document.createElement("h5");
    h5Title.classList.add("card-title");
    h5Title.innerHTML = this.title;

    cardDiv.appendChild(cardImg);
    bodyDiv.appendChild(h5Title);
    cardDiv.appendChild(bodyDiv);

    cardDiv.addEventListener("click", () => {
      this.cardClicked();
    });

    return cardDiv;
  }

  async cardClicked() {
    // console.log("Card clicked", this.title);

    if (!this.data) {

      this.data = await this.getMovieData();
      console.log(this.data);
    }

    const modal = document.getElementById("modal-container");
    modal.style.display = "block";
    
    document.getElementById('movie-name').innerHTML     = this.data.Title;
    document.getElementById('movie-year').innerHTML     = this.data.Year;
    document.getElementById('movie-runtime').innerHTML  = "Runtime:",  this.data.Runtime;
    document.getElementById('movie-director').innerHTML ="Director", this.data.Director;
    document.getElementById('movie-plot').innerHTML     ="Plot", this.data.Plot;
    
    const movieRatingsList = document.getElementById('movie-ratings-list').innerHTML;
    console.log(this.data.Ratings)
    this.data.Ratings.forEach(item => {
      ratingList.innerHTML = item.Source + ": " + item.Value;
      console.log(item.Source + ": " + item.Value)
      // movieRatingsList.appendChild(ratingList)


      const ratingList = document.createElement('li');
      ratingList.appendChild(item);
      movieRatingsList.appendChild(ratingList);

    })


  }
  

  async getMovieData() {
    try {
      const url =
        "https://www.omdbapi.com/?apikey=" + this.apiKey + "&i=" + this.id;

      console.log("URL:", url);

      const response = await fetch(url);
      const result = await response.json();

      // console.log(result)

      return result;
    } catch (error) {
      return false;
    }
  }
}

let movieSearcher = null;
window.onload = () => {
  movieSearcher = new MovieSearcher();
};




