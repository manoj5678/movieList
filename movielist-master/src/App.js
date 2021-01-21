
import './App.css';

import Header                  from './Components/Header'
import MovieList               from './Components/MovieList'
import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}                              from "react-router-dom";
import MovieDetailComponent    from "./Components/MovieDetailComponent";

function App() {
    const [value, setValue] = useState('test')
    const [selectedMovie, setSelectedMovie] = useState()
    
  return (
    <div className="App">
        <Header onActivityChange={value => {
            setValue(value)
        }}/>
        <Router>
            <Switch>
                <Route path="/movie/:id">
                    <MovieDetailComponent selectedMovie={selectedMovie}/>
                </Route>
                <Route exact path="/">
                    <MovieList searchValue={value} clickedMovie={movie => setSelectedMovie(movie)}/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
