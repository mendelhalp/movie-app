import { Container, ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import './MoviesPage.css';
import axios from 'axios';
import MovieModel from '../model/MovieModel';


const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState('');

    const movieSearch = (event) => {
        setSearchValue(event.target.value);

        if (event.target.value) {
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=36c4094b604576f2d3efff6e899c1578&page=1&query=" + event.target.value)
                .then(res => {
                    setResults(res.data.results)
                });

        } else {
            setResults('');
        }
    }

    const addMovie = (index) => {
        axios.get("https://api.themoviedb.org/3/movie/" + results[index].id + "/credits?api_key=36c4094b604576f2d3efff6e899c1578").then(res => {
            let director;
            let stars = '';
            for (let i = 0; i < res.data.crew.length; i++) {
                if (res.data.crew[i].job === 'Director') {
                    director = res.data.crew[i].name;
                    i = res.data.crew.length - 1;
                }
            }
            for (let i = 0; i < res.data.cast.length && i < 3; i++) {
                if (i === 2) {
                    stars += (`${res.data.cast[i].name}`);
                } else {
                    stars += (`${res.data.cast[i].name}, `);
                }
            }
            console.log(`${results[index].title} ${results[index].poster_path} "" ${director} ${stars}`);
            setMovies(movies.concat(new MovieModel(results[index].title, results[index].poster_path, '', director, stars)));
        });
        setSearchValue('');
        setResults('');
    }

    let resultItems;
    if (results) {
        resultItems = results.map((result, index) =>
            <ListGroup.Item onClick={() => addMovie(index)} action key={index}>{result.title}</ListGroup.Item>);
    }

    let movieCards;
    if (movies) {
        movieCards = movies.map((movie, index) =>
            <div key={index}>
                <MovieCard movie={movie} />
            </div>
        )
    };



    return (
        <div className="p-movie">
            <Container className="position-relative">
                <h1 className="text-center my-5">Movies Gallery</h1>
                <input className="mb-3" type="text" value={searchValue} placeholder="search movie" onChange={movieSearch}></input>

                <ListGroup className="results-box">
                    {resultItems}
                </ListGroup>

                {movieCards}

            </Container>
        </div>
    )

}

export default MoviesPage;