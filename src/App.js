import { Container, Nav } from 'react-bootstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ActorsPage from './pages/ActorsPage';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

function App() {
  return (
    <>
      <HashRouter>
        <Container>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="#/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/actors">Actors</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/movies">Movies</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>

        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/home"><HomePage /></Route>
          <Route exact path="/actors"><ActorsPage /></Route>
          <Route exact path="/movies"><MoviesPage /></Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
