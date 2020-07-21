import React from "react";
import "./App.css";
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Componentes/Login';
import SignUp from './Componentes/SignUp';
import DetailsWall from './Componentes/DetailsWall';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
      <Route path="/" exact component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/detailswall" exact component={DetailsWall} />
      </div>
      </BrowserRouter>
    </div>
  );

}

export default App;
