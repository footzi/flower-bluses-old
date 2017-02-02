import React from "react"; 
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Index from "./index.jsx"
import Catalog from "./catalog.jsx"
import Polimer from "./polimer.jsx"
import Pendants from "./pendants.jsx"
import ProductPendant from "./product-pendant.jsx"

ReactDOM.render (
    <Router history={hashHistory}>
        <Route path="/" component={Index} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/catalog/polimer" component={Polimer} >
        <Route path="/catalog/polimer/pendants" component={Pendants} >
        <Route path="/catalog/polimer/pendants/:productId" component={ProductPendant} />
        </Route>
        </Route>
    </Router>,
    document.getElementById("main")
);

