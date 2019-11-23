import React from "react";
import Popup from "reactjs-popup";
import NavBar2 from "./NavBar2";
import NavBar1 from "./NavBar1";
import NavBar3 from "./NavBar3";
import "./Nav.css";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: "40px"
};
const contentStyle = {
    background: "rgba(255,255,255,0",
    width: "80%",
    border: "none"
};

const Nav = () => (
    <div style={styles}>
        <Popup
            modal
            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <NavBar1 open={open} />}
        >
            {close => <NavBar3 close={close} />}
        </Popup>
    </div>
);

export default Nav;