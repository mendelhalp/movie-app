import { Card } from 'react-bootstrap';
import './ActorCard.css';

const ActorCard = ({actor}) => 

        <div className="c-actor-card mb-4">
            <Card>
                <Card.Img variant="top" src={actor.img} />
                <Card.Body className="p-2">
                <a href={actor.link} target="_blank">
                    <Card.Title className="text-center">{actor.fname + " " + actor.lname + " " + actor.age()}</Card.Title>
                </a>
                </Card.Body>
            </Card>
        </div>



export default ActorCard;