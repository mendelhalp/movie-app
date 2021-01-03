class MovieModel {

    constructor(plainMovieOrName, poster, length, director, stars) {
        if (typeof plainMovieOrName === "object") {
            this.name = plainMovieOrName.name;
            this.poster = "https://image.tmdb.org/t/p/w300/" + plainMovieOrName.poster;
            this.length = plainMovieOrName.length;
            this.director = plainMovieOrName.director;
            this.stars = plainMovieOrName.stars;
        } else {
            this.name = plainMovieOrName;
            this.poster = "https://image.tmdb.org/t/p/w300/" + poster;
            this.length = length;
            this.director = director;
            this.stars = stars;
        }
    }

}

export default MovieModel;