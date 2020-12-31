import { Col, Container, Row } from 'react-bootstrap';
import './ActorsPage.css';

const MoviesPage = () => {

    const movieCards = () => {

        return (
            <></>
        )
    }

    return (
        <div className="p-actor">
            <Container>
                <h1 className="text-center my-5">Movies Gallery</h1>
                <Row>
                    <Col xs={12} md="auto">
                        <input type="text" value={''} placeholder="search movie" onChange={e => { }}></input>
                    </Col>
                </Row>
                <Row>
                    {movieCards}
                </Row>
            </Container>
        </div>
    )

}

export default MoviesPage;