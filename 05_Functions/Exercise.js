const movies = [{
    "title": "Jaws",
    "director": "Steven Spielberg",
    "year": "1975"
},
{
    "title": "Star Wars",
    "director": "George Lucas",
    "year": "1977"
},
{
    "title": "Avengers: Infinity War",
    "director": "Anthony and Joe Russo",
    "year": "2018"
},
{
    "title": "Top Gun",
    "director": "Tony Scott",
    "year": "1986"
},
{
    "title": "Justice League",
    "director": "Zack Snyder",
    "year": "2017"
}
];

// Part 1 - Create a function to find a movie and output it's detail
// Instruction 5 - Create findMovie
function findMovie(movieTitle) {
    // Instruction 6 - for...of
    for (let movie of movies) {
        // Instruction 6-a-i - check title
        if (movie.title === movieTitle) {
            console.log(`${movie.title} is a film directed by ${movie.director} released in ${movie.year}`);
        }
        // Instruction 6-a-ii - log movie
        //console.log(movie);
    }
    // Instruction 6-b - log movie
    //console.log(movie); // Comment me out at Instruction 10 and Uncomment at Instruction 12
}

// Instruction 7 - call findMovie
findMovie("Star Wars");
// Instruction 8 - log movie
//console.log(movie);  // Comment me out at Instruction 10 and Uncomment at Instruction 12

// Instruction 11 - declare movie
// Instruction 14 - change let to var below
let movie = "Thor: Ragnorok";

// Instruction 12 plus uncommenting above
console.log(movie);

// Instruction 16 - call function with data
findMovie(movie);




// Part 2 - Create a function to return a movie object
// Instruction 1 - comment out all code above me apart from const movies
// Instruction 2 - declare returnMovie
function returnMovie(movieTitle) {
    // Instruction 2-a
    for (let movie of movies) {
        // Instruction 2-a-i
        if (movie.title === movieTitle) {
            // Instruction 2-a-ii
            return movie;
        }
        // Instruction 2-a-iii
        console.log(movie);
    }
    // Instruction 2b
    console.log("Any text, any text at all!");
    // Instruction 8 - comment out line above and add line below
    return `Movie not found`;
}

// Instruction 3
let myMovie = returnMovie("Avengers: Infinity War");
// Instruction 4
console.log(myMovie);
// Instruction 5
console.log(`${myMovie.title} is a film directed by ${myMovie.director} released in ${myMovie.year}`);

// Instruction 6
let myOtherMovie = returnMovie("Thor: Ragnorok");
// Instruction 7
console.log(myOtherMovie);

// Instruction 10
function myMovieDetails(anyMovie) {
    // Instruction 11
    if (typeof (anyMovie) === 'object') {
        return `${anyMovie.title} is a film directed by ${anyMovie.director} released in ${anyMovie.year}`;
    } else {
        return anyMovie;
    }
}

// Instruction 12
console.log(myMovieDetails(myOtherMovie));

// Instruction 14 - a function as an argument to another function
console.log(myMovieDetails(returnMovie("Jaws")));