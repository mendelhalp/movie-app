import './ActorsPage.css';
import Actor from '../model/ActorModel';
import ActorCard from '../components/ActorCard';


let actorsArr = [];

actorsArr.push(new Actor("Marcel", "Dalio", "1900-07-17", "https://m.media-amazon.com/images/M/MV5BMjIyODk3OTIyOF5BMl5BanBnXkFtZTcwNDMwMjgwOA@@._V1_UY317_CR19,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0197950/?ref_=tt_cl_t3"));
actorsArr.push(new Actor("Louis", "de Funès", "1914-07-31", "https://m.media-amazon.com/images/M/MV5BNDc5NTkyMDU4Nl5BMl5BanBnXkFtZTgwNzk0NTM1NTE@._V1_UY317_CR126,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000086/?ref_=tt_cl_t1"));
actorsArr.push(new Actor("Suzy", "Delair", "1917-12-31", "https://m.media-amazon.com/images/M/MV5BMTQ0MjgwMjEyMV5BMl5BanBnXkFtZTgwMjExNDc3NTE@._V1_UY317_CR132,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0216177/?ref_=tt_cl_t2"));
actorsArr.push(new Actor("Janet", "Brandt", "1914-12-13", "https://m.media-amazon.com/images/M/MV5BZGJkOWQyY2MtOGQ4Mi00MjY0LTkwM2EtNWMwMTEzYzg4YTFkXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_UY317_CR9,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0104935/?ref_=tt_cl_t6"));

const ActorsPage = () => {



    return (
        <div>
            <ActorCard/>
        </div>
    )
}

export default ActorsPage;