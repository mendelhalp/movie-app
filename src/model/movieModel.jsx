class MovieModel {

    constructor(plainMovieOrName, length , poster, director, stars) {
        if (typeof plainMovieOrName === "object") {
            this.name = plainMovieOrName.name;
            this.length = plainMovieOrName.length;
            this.poster = plainMovieOrName.poster;
            this.director = plainMovieOrName.director;
            this.stars = plainMovieOrName.stars;
        } else {
            this.name = plainMovieOrName;
            this.length = length;
            this.poster = poster;
            this.director = director;
            this.stars = stars;
        }
    }

}

export default MovieModel;