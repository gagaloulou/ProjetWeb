import React from "react";

export default ({ close }) => (
    <div className="menu">
        <ul>
            <li onClick={close}>Menu</li>
            <li onClick={close}>Formulaire</li>
            
        </ul>
    </div>
);