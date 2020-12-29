import './ActorsPage.css';
import Actor from '../model/ActorModel';
import ActorCard from '../components/ActorCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';


let actorsArr = [];

actorsArr.push(new Actor("Marcel", "Dalio", "1900-07-17", "https://m.media-amazon.com/images/M/MV5BMjIyODk3OTIyOF5BMl5BanBnXkFtZTcwNDMwMjgwOA@@._V1_UY317_CR19,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0197950/?ref_=tt_cl_t3"));
actorsArr.push(new Actor("Louis", "de Funès", "1914-07-31", "https://m.media-amazon.com/images/M/MV5BNDc5NTkyMDU4Nl5BMl5BanBnXkFtZTgwNzk0NTM1NTE@._V1_UY317_CR126,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000086/?ref_=tt_cl_t1"));
actorsArr.push(new Actor("Suzy", "Delair", "1917-12-31", "https://m.media-amazon.com/images/M/MV5BMTQ0MjgwMjEyMV5BMl5BanBnXkFtZTgwMjExNDc3NTE@._V1_UY317_CR132,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0216177/?ref_=tt_cl_t2"));
actorsArr.push(new Actor("Janet", "Brandt", "1914-12-13", "https://m.media-amazon.com/images/M/MV5BZGJkOWQyY2MtOGQ4Mi00MjY0LTkwM2EtNWMwMTEzYzg4YTFkXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_UY317_CR9,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0104935/?ref_=tt_cl_t6"));

const ActorsPage = () => {
    const [actors, setActors] = useState(actorsArr.sort((a1, a2) => (a1.lname < a2.lname) ? -1 : (a1.lname > a2.lname) ? 1 : 0));
    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState("lname");

    const sortActors = (e) => {

        setSortBy(e.target.value)

        setActors(actors.slice(0)
            .sort((actor1, actor2) => {
                if (e.target.value === 'lname') {
                    if (actor1.lname < actor2.lname) {
                        return -1
                    } else if (actor1.lname > actor2.lname) {
                        return 1
                    } else {
                        return 0
                    };
                } else if (e.target.value === 'fname') {
                    if (actor1.fname < actor2.fname) {
                        return -1
                    } else if (actor1.fname > actor2.fname) {
                        return 1
                    } else {
                        return 0
                    };
                } else if (e.target.value === 'age') {
                    return actor2.age() - actor1.age();
                }
            }));
    };


    const cardColumns = actors.map((actor, index) => {
        if (actor.lname.includes(filter) || actor.fname.includes(filter)) {
            return (
                <Col key={index} xs={12} md={6} lg={3}>
                    <ActorCard actor={actor} />
                </Col>
            )
        }
    });

    return (
        <div className="p-actor">
            <Container>
                <h1 className="text-center my-5">Actors Gallery</h1>
                <Row>
                    <Col xs={12} md="auto">
                        <label htmlFor="sort-type-select" className="mr-1">Sort by:</label>
                        <select id="sort-type-select" value={sortBy} onChange={sortActors} className="mb-3">
                            <option value="lname">Last Name</option>
                            <option value="fname">First Name</option>
                            <option value="age">Age (z-a)</option>
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