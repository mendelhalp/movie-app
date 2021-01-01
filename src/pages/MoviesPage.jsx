import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import './MoviesPage.css';
import axios from 'axios';
import MovieModel from '../model/MovieModel';


const MoviesPage = () => {
    // const [searchValue, setSearchValue] = useState([]);
    const [results, setResults] = useState([]);

    // const movieSearch = (event) => {
    //     setSearchValue(event.target.value)

    //     if (event.target.value) {
    //         setResults(axios.get("https://api.themoviedb.org/3/search/movie?api_key=36c4094b604576f2d3efff6e899c1578&page=1&query=" + event.target.value).then(res1 => {
    //             return (
    //             res1.data.results.map(movie => {
    //                 axios.get("https://api.themoviedb.org/3/movie/" + movie.id + "/credits?api_key=36c4094b604576f2d3efff6e899c1578").then(res2 => {
    //                     const director = '';
    //                     const stars = '';
    //                     for (let i = 0; i < res2.data.crew.length; i++) {
    //                         if (res2.data.crew[i].job === 'Director') {
    //                             director = res2.data.crew[i].name;
    //                             i = res2.data.crew.length - 1;
    //                         }
    //                     }
    //                     for (let i = 0; i < res2.data.cast.length && i < 3; i++) {
    //                         stars = stars+`${res2.data.cast[i].name} `;
    //                     }
    //                     console.log(`${movie.titl} "" ${movie.poster_path} ${director} ${stars}`);
    //                     return new MovieModel(movie.titl, '', movie.poster_path, director, stars);
    //                 });
    //             }));
    //         }));
    //     } else {
    //         setResults([]);
    //     }
    // }

    // const movieSearch = (event) => {
    //     setSearchValue(event.target.value)

    //     if (event.target.value) {
            
    //     } else {
    //         setResults([]);
    //     }
    // }

    useEffect(() => {
        axios.get("Movies.json").then(function(res) {
            setResults(res.data.map(plainMovie => new MovieModel(plainMovie)));
        });
    },[]);
    
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
                {/* <input className="mb-3" type="text" value={searchValue} placeholder="search movie" onChange={movieSearch}></input> */}

                {movieCards}

            </Container>
        </div>
    )

}

export default MoviesPage;