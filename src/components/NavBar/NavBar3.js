import React from "react";
import Formulaire from './formulaire';

export default ({ close }) => (
    <div className="menu">
        <ul>
            <li onClick={close}>Menu</li>
            <li onClick={<Formulaire/>}>Formulaire</li>
            
        </ul>
    </div>
);