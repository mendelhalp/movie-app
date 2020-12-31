import './ActorsPage.css';
import Actor from '../model/ActorModel';
import ActorCard from '../components/ActorCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ActorsPage = () => {
    const [actors, setActors] = useState([]);
    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState("lname");

    useEffect(() => {
        axios.get("Actors.json").then(res =>{
            setActors(res.data.map(plainActor => new Actor(plainActor)));
        });
    },[]);

    const filterdActors = actors.filter(actor =>
        actor.lname.toLowerCase().includes(filter.toLowerCase()) || actor.fname.toLowerCase().includes(filter.toLowerCase()))

    filterdActors.sort((actor1, actor2) => {
        if (sortBy === 'lname') {
            if (actor1.lname.toLowerCase() < actor2.lname.toLowerCase()) {
                return -1
            } else if (actor1.lname.toLowerCase() > actor2.lname.toLowerCase()) {
                return 1
            } else {
                return 0
            };
        } else if (sortBy === 'fname') {
            if (actor1.fname.toLowerCase() < actor2.fname.toLowerCase()) {
                return -1
            } else if (actor1.fname.toLowerCase() > actor2.fname.toLowerCase()) {
                return 1
            } else {
                return 0
            };
        } else if (sortBy === 'age a-z') {
            return actor1.age() - actor2.age();
        } else if (sortBy === 'age z-a') {
            return actor2.age() - actor1.age();
        }
    });

    const cardColumns = filterdActors.map((actor, index) => {
        return (
            <Col key={index} xs={12} md={6} lg={3}>
                <ActorCard actor={actor} />
            </Col>
        )
    }
    );

    return (
        <div className="p-actor">
            <Container>
                <h1 className="text-center my-5">Actors Gallery</h1>
                <Row>
                    <Col xs={12} md="auto">
                        <label htmlFor="sort-type-select" className="mr-1">Sort by:</label>
                        <select id="sort-type-select" value={sortBy} onChange={e => {setSortBy(e.target.value)}} className="mb-3">
                            <option value="lname">Last Name</option>
                            <option value="fname">First Name</option>
                            <option value="age z-a">Age (z-a)</option>
                            <option value="age a-z">Age (a-z)</option>
                        </select>
                    </Col>
                    <Col xs={12} md="auto">
                        <label htmlFor="filter-text" className="mr-1 mb-3">Filter:</label>
                        <input id="filter-text" type="text" value={filter} onChange={e => { setFilter(e.target.value) }}></input>
                    </Col>
                </Row>
                <Row>
                    {cardColumns}
                </Row>
            </Container>
        </div>
    )
}

export default ActorsPage;