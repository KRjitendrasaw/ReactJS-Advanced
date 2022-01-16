import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
// import new from "new.jpg";
import { Link } from "react-router-dom";


const Home = (card) => {
    return (
        <div className="card">
            <div>
                <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/01/7_principles_of_art_ant_design_movement_1200-1-683x1024.jpg" alt= "ui.img"/>
            </div>
            <div className="button">
                <h1> 10x Team 04</h1>
                <Link to="/InstaClone" style={{ textDecoration: 'none' }}>
                <button class="button1">ENTER</button>
                </Link>
            </div>
        </div>
    )
}
export default Home;