import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Characters from './components/Characters';
import EachCard from './components/EachCard';
import Favorites from './components/Favorites';
import Header from "./components/Header";
import { FavProvider } from './context/favContext';


function App() {
  return (
    <div>
      <FavProvider>
      <HashRouter>
        <Header/>
        <Switch>
          <Route exact path = "/" component={Characters}/>
          <Route exact path ="/favorites" component={Favorites}/>
          <Route exact path ="/:id" component={EachCard}/>
          <Route path= "*"/>
       </Switch>
      </HashRouter>
      </FavProvider>
    </div>
  );
}

export default App;
