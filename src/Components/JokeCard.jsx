import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';

const JokeCard = () => {
    const apiLink = "https://official-joke-api.appspot.com/jokes/random";
    const [loaded, setLoaded] = useState(false);
    const [setup, setSetup] = useState("");
    const [punchline, setPunchline] = useState("");

    const fetchJoke = () => {
        setLoaded(false);
        axios.get(apiLink)
        .then(res => {
            setSetup(res.data.setup);
            setPunchline(res.data.punchline);
            // setTimeout(()=>{setLoaded(true)}, 3000)
            setLoaded(true);
        }).catch(err => {
            console.error(err);
            setLoaded(true);
        })
    }

    useEffect(()=>{
        fetchJoke();
    }, []);

    const innerContent = () => {
        if(!loaded){
            return (
                <LoadingSpinner />
            );
        }else{
            return (
                <div className="joke">
                    <h3>{setup}</h3>
                    <p>{punchline}</p>
                </div>
            );
        }
    }

    return (
        <div className="jokeCardContainer">
            {innerContent()}
            <button onClick={fetchJoke}>New Joke</button>
        </div>
    );
}

export default JokeCard;