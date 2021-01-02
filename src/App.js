import './App.css';
import ActorsPage from './pages/ActorsPage';
import MoviesPage from './pages/MoviesPage';
import TmdbMoviesPage from './pages/tmdbMoviesPage';

function App() {
  return (
    <>
      <ActorsPage/>
      {/* <MoviesPage/> */}
      <TmdbMoviesPage/>
    </>
  );
}

export default App;
