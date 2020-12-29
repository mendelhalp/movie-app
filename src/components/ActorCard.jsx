import { Card } from 'react-bootstrap';
import './ActorCard.css';

const ActorCard = (props) => {
    const { fname, lname, age, imgSrc, imdbLink } = props;

    return (
        <div className="c-actor-card">
            <Card>
                <a href={imdbLink} target="_blank">
                    <Card.Img variant="top" src={imgSrc} />
                </a>
                <Card.Body>
                    <Card.Title className="text-center">{fname + " " + lname + " " + age}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}



export default ActorCard;