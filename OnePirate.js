import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const OnePirate = (props) => {
    const { id } = useParams();
    const [DisplayOne, setOnePirate] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
            .then((res) => {
                console.log(res.data);
                setOnePirate(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container2">
        <div className="row">
            <div className="col-8">
            <br></br>
            <h2 className="pirate-meet">Meet the Pirate</h2>
        </div>
        <div className="DisplayOne-component">
            <p>{DisplayOne.name}</p>
            <p>{DisplayOne.image}</p>
            <p>Number of Chests: {DisplayOne.chest}</p>
            <p>Catch Phrase: "{DisplayOne.phrase}"</p>
		    <p>Crew Position: {DisplayOne.position}</p>
            <p>Pirate Qualities:</p>
            <p>Peg Leg: {DisplayOne.qualitiesOne}, Eye Patch: {DisplayOne.qualitiesTwo}, Hook Hand: {DisplayOne.qualitiesThree}</p>
        </div>
        </div>
        </div>

    );
};

export default OnePirate;