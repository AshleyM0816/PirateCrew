import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as React from 'react';

const NewPirate = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [chest, setChest] = useState("");
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [qualitiesOne, setQualitiesOne] = useState("");
    const [qualitiesTwo, setQualitiesTwo] = useState("");
    const [qualitiesThree, setQualitiesThree] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const Checkbox = ({ label, value, onChange }) => {
        return (
            <label>
                <input type="checkbox" checked={value} onChange={onChange} />
                {label}
            </label>
        );
};

    

    const handleQualitiesOne = () => {
    setQualitiesOne(!qualitiesOne);
};
    const handleQualitiesTwo = () => {
    setQualitiesTwo(!qualitiesTwo);
};
    const handleQualitiesThree = () => {
    setQualitiesThree(!qualitiesThree);
};

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/pirate/new", { name, image, chest, phrase, position, qualitiesOne, qualitiesTwo, qualitiesThree })
        .then((response) => {
            console.log(response);
            navigate("/pirate");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };
    return (
        <div className="container3">
        <div className="row">
            <div className="col-4">
                <Link
                    className='nav-link'
                    exact
                    to='/pirate'
                    >
                    Back to Crew
                </Link>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">Pirate Name</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                {errors.name ? <p>{errors.name.message}</p> : null}
                </div>
                <div className="form-group">
                <label htmlFor="image">Image URL</label>
                <input
                    type="url"
                    className="form-control"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                />
                {errors.type ? <p>{errors.type.message}</p> : null}
                </div>
                <div className="form-group">
                <label htmlFor="chest"># of Treasure Chests</label>
                <input
                    type="number" aria-label="Chests"
                    className="form-control"
                    onChange={(e) => setChest(e.target.value)}
                    value={chest}
                />
                {errors.description ? <p>{errors.description.message}</p> : null}
                </div>
                <div className="form-group">
                <label htmlFor="phrase">Pirate Catch Phrase</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setPhrase(e.target.value)}
                    value={phrase}
                />
                {errors.description ? <p>{errors.description.message}</p> : null}
                </div>
                <div className="form-group">
                <label htmlFor="position">Crew Position</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setPosition(e.target.value)}
                    value={position}
                />
                {errors.description ? <p>{errors.description.message}</p> : null}
                </div>
                <div className="form-group">
                <p>Pirate Qualities</p>
                
                    <Checkbox
                        label="Peg Leg"
                        value={qualitiesOne}
                        onChange={handleQualitiesOne}
                    />
                    <Checkbox
                        label="Eye Patch"
                        value={qualitiesTwo}
                        onChange={handleQualitiesTwo}
                    />
                    <Checkbox
                        label="Hook Hand"
                        value={qualitiesThree}
                        onChange={handleQualitiesThree}
                    />
                    {errors.description ? <p>{errors.description.message}</p> : null}
                </div>
                    
                <button className="btn btn-primary" type="submit">
                Add Pirate
                </button>
            </form>
            </div>
        </div>
        </div>
    );
    };

export default NewPirate;