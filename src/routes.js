import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Plano from './pages/Plano';

function Routes(){
    return(
        <BrowserRouter>
            <Route path='/' exact component={Landing}/>
            <Route path='/plano/:plano' component={Plano}/>
        </BrowserRouter>
    );
}
export default Routes;