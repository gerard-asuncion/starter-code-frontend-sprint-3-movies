// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map(movie => movie.director)
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter(movie => movie.director == director)
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const movies = array.filter(movie => movie.director == director);
  const sum = movies.reduce((acc, cur) => acc + cur.score, 0);
  const average = sum / movies.length;
  let averageDecimals = average.toFixed(2);
  let result = parseFloat(averageDecimals);
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const titles = array.map(movie => movie.title);
  let titlesAlphabetic = titles.sort();
  let result = titlesAlphabetic.slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const titlesAndYears = array.map(movie => ({
    title: movie.title,
    year: movie.year
  }))
  let result = titlesAndYears.sort((a, b) => {
    const yearA = a.year;
    const yearB = b.year;
    const titleA = a. title;
    const titleB = b.title;
    if(yearA < yearB) return -1;
    if(yearA > yearB) return 1;
    if(yearA == yearB) {
      if(titleA < titleB) return -1
      if(titleB > titleA) return 1
    }
  });
  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, movieGenre) {
  const movies = array.filter(movie => movie.genre.includes(movieGenre));
  const sum = movies.reduce((acc, cur) => acc + cur.score, 0);
  const average = sum / movies.length;
  let result = parseFloat(average.toFixed(2))
  console.log("EXERCICE 6 ->", result);
  return result;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  
  const regexHours = /(\d+)h/;
  const regexMinutes = /(\d+)min/;

  const newArrayMovies = [];
  
  array.forEach(film => {
    let hours = 0;
    let minutes = 0;
    let filmDuration = film.duration;

    if (typeof filmDuration !== 'string') {
      filmDuration = String(filmDuration);
    }

    const matchHours = filmDuration.match(regexHours);    
    if (matchHours) {
        hours = parseInt(matchHours[1]);
    }

    const matchMinutes = filmDuration.match(regexMinutes);  
    if (matchMinutes) {
        minutes = parseInt(matchMinutes[1]);
    }

    const totalMinutes = hours * 60 + minutes;
    film.duration = totalMinutes;

    newArrayMovies.push(film);

  });
  let result = newArrayMovies;
  console.log("EXERCICE 7 ->", result);
  return result
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const arr = []
  const filmsByYear = array.filter(film => film.year == year);
  const filmScore = filmsByYear.reduce((max, current) => {
    if(current.score > max.score){
      return current;
    } else {
      return max;
    }
  })
  let result = [filmScore]
  console.log("EXERCICE 8 ->", result);
  return result;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
