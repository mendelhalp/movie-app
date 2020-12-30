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
actorsArr.push(new Actor("Morgan", "Freeman", "1937-06-01", "https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000151/"));
actorsArr.push(new Actor("Gary", "Oldman", "1958-03-21", "https://m.media-amazon.com/images/M/MV5BMTc3NTM4MzQ5MV5BMl5BanBnXkFtZTcwOTE4MDczNw@@._V1_UY317_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000198/"));
actorsArr.push(new Actor("Charles", "Chaplin", "1889-04-16", "https://m.media-amazon.com/images/M/MV5BNDcwMDc0ODAzOF5BMl5BanBnXkFtZTgwNTY2OTI1MDE@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000122/"));
actorsArr.push(new Actor("Shaun", "Toub", "1963-01-01", "https://m.media-amazon.com/images/M/MV5BZjVmYTE0ZmItYzZhMC00OTA2LWIxYWEtYjQ4NGQ2OTQyZGY2XkEyXkFqcGdeQXVyMTE2MzE4NzQ@._V1_UY317_CR20,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0869467/?ref_=tt_cl_t2"));
actorsArr.push(new Actor("Navid", "Negahban", "1968-06-02", "https://m.media-amazon.com/images/M/MV5BZGEwM2VmYzItYjlhMC00YzRjLTgxOGYtZTdiMWY2YjkyNjI3XkEyXkFqcGdeQXVyMTQzMDU3Nw@@._V1_UY317_CR8,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm1041023/?ref_=tt_cl_t5"));
actorsArr.push(new Actor("Adam", "Sandler", "1966-09-09", "https://m.media-amazon.com/images/M/MV5BMjQyNzM2MjM1Ml5BMl5BanBnXkFtZTcwMDE5NjI3Mg@@._V1_UY317_CR7,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0001191/?ref_=fn_al_nm_1"));
actorsArr.push(new Actor("Sacha", "Baron Cohen", "1971-10-13", "https://m.media-amazon.com/images/M/MV5BMTkzMTY4Nzc2NF5BMl5BanBnXkFtZTgwODc3MDI2MDE@._V1_UY317_CR11,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0056187/?ref_=tt_cl_t1"));
actorsArr.push(new Actor("Linda", "Hunt", "1945-04-02", "https://m.media-amazon.com/images/M/MV5BMTM0NDg4MzMzNV5BMl5BanBnXkFtZTcwOTUwMTc4Mg@@._V1_UY317_CR14,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0001373/"));

const ActorsPage = () => {
    const [actors, setActors] = useState(actorsArr);
    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState("lname");

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
        } else if (sortBy === 'age') {
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