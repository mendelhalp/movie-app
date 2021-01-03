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
                    <Card.Body className="p-2 text-left row flex-column justify-content-between h-100">
                        <div className="">
                            <Card.Title className="name-text font-weight-bold">{movie.name}</Card.Title>
                            <Card.Text className="length-text">{movie.length}</Card.Text>
                        </div>
                        <div className="">
                            <Card.Text className="directors-text"><span className="font-weight-bold">Director:</span> {movie.director}</Card.Text>
                            <Card.Text className="stars-text"><span className="font-weight-bold">Main stars:</span> {movie.stars}</Card.Text>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </div>


export default MovieCard;