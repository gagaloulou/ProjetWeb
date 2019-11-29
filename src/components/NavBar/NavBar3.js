import React from "react";

import Container from "../../App";
import { BrowserRouter, Route, Link } from "react-router-dom";



export default ({ close }) => (
    <div className="menu">
        <ul>
            <BrowserRouter>
            <Route exact path="/" component={Container}/>
            <Route path="/formulaire" component={Container}/>
            </BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/">Formulaire</Link>
            
        </ul>
    </div>
);