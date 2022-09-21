class Movie {
    constructor(movieObject) {
      this.title = movieObject.Title;
      this.poster = movieObject.Poster;
      this.id = movieObject.imdbID;
    }
  
    createMovieCard() {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
  
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
  
      return cardDiv;
    }
  }
  
  class MovieSearcher {
    constructor() {
      this.page = 1;
      this.apiKey = "f77509f3";
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
        const response = await fetch(url);
        const results = await response.json();
  
        return results.Search;
      } catch (e) {
        return [];
      }
    }
  
    async runSearch(e) {
      console.log("runSearch");
  
      this.searchQuery = document.getElementById("search-input").value;
  
      const results = await this.getMovies();
  
      const movieObjects = [];
      results.forEach((item) => {
        const movie = new Movie(item);
        movieObjects.push(movie);
        const card = movie.createMovieCard();
        console.log(card);
      });
    }
  }
  
  let movieSearcher = null;
  window.onload = () => {
    movieSearcher = new MovieSearcher();
  };
  
  // https://www.omdbapi.com/?
  // apikey=87dd0709&
  // type=movie
  // &s=the%20lord%20of&
  // page=2
  