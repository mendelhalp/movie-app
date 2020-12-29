import { Card, Col, Row } from 'react-bootstrap';
import './ActorCard.css';

const ActorCard = ({ actor }) =>

    <div className="c-actor-card mb-4">
        <Card>
            <Card.Img variant="top" src={actor.img} />
            <Card.Body className="p-2">
                <Row className="justify-content-between">
                    <Col xs={'auto'}>
                        <a href={actor.link} target="_blank">
                            <Card.Text className="text-left font-weight-bold">{actor.fname + " " + actor.lname}</Card.Text>
                        </a>
                    </Col>
                    <Col xs={'auto'}>
                        <Card.Text className="text-right">{actor.age()}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </div>



export default ActorCard;