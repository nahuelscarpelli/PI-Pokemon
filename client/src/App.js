import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Landing from './components/Landing'
import About from './components/About';
import FilterBar from './components/FilterBar';
import Detail from './components/Detail';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={Landing} />
      <Route path={["/home","/form","/about","/pokemons/:id"]} component={NavBar} />
      <Route path={"/home"} component={FilterBar} />
      <Route path={"/home"} component={Cards} />
      <Route path={"/about"} component={About} />
      <Route path={"/pokemons/:id"} component={Detail} />
      <Route path={"/form"} component={Form} />
      <Route path={"/home"} component={Footer} />
    </div>
  );
}

export default App;
