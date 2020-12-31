import { Card, Col, Row } from 'react-bootstrap';
import './MovieCard.css';

const MovieCard = ({ movie }) =>

    <div className="c-movie-card mb-4">
        <Card>
            <Row className="justify-content-start">
                <Col xs={3}>
                    <Card.Img variant="top" src={movie.poster} />
                </Col>
                <Col xs={9}>
                    <Card.Body className="p-2">
                        <Card.Title className="text-left font-weight-bold">{movie.name}</Card.Title>
                        <Card.Text className="text-left">{movie.length}</Card.Text>
                        <Card.Text className="text-left">Director: {movie.director}</Card.Text>
                        <Card.Text className="text-left">Main stars: {movie.stars}</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </div>


export default MovieCard;