import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import './MoviesPage.css';

const MoviesPage = () => {


    const results = [{ name: 'Tehran', length: '1:50:00', poster: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/uTSLeQTeHevt4fplegmQ6bOnE0Z.jpg', director: 'Shimon', stars: 'Avi Cohen, Beni Arad' }]

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
                <input className="mb-3" type="text" value={''} placeholder="search movie" onChange={e => { }}></input>
                
                {movieCards}

            </Container>
        </div>
    )

}

export default MoviesPage;