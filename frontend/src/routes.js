import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/logon';
import Registro from './pages/registro';
import Contador from './pages/contador';
import Perfil from './pages/perfil';
import NovoCaso from './pages/novoCaso';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/registro" component={Registro} />
                <Route path="/contador" component={Contador} />
                <Route path="/perfil" component={Perfil} />
                <Route path="/casos/novo" component={NovoCaso} />
            </Switch>
        </BrowserRouter>
    );
}