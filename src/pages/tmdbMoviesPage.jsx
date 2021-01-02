import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import './tmdbMoviesPage.css';
import axios from 'axios';
import MovieModel from '../model/MovieModel';


const TmdbMoviesPage = () => {
    const [searchValue, setSearchValue] = useState([]);
    const [results, setResults] = useState([]);

    const movieSearch = (event) => {
        setSearchValue(event.target.value)

        if (event.target.value) {
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=36c4094b604576f2d3efff6e899c1578&page=1&query=" + event.target.value)
                .then(res => { setResults(res.data.results.map(plainMovie => new MovieModel(plainMovie.title, plainMovie.poster_path))); });
        } else {
            setResults([]);
        }
    }



    const movieCards = results.map((movie, index) => {

        return (
            <div key={index}>
                <MovieCard movie={movie} />
            </div>
        )
    });

    return (
        <div className="p-movie">
            <Container>
                <h1 className="text-center my-5">Movies Gallery</h1>
                <input className="mb-3" type="text" value={searchValue} placeholder="search movie" onChange={movieSearch}></input>

                {movieCards}

            </Container>
        </div>
    )

}

export default TmdbMoviesPage;