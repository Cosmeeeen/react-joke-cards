import React, { useState, useEffect } from 'react';

const LoadingSpinner = () => {
    const [loadingText, setLoadingText] = useState("Loading");
    const [dotCount, setDotCount] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setLoadingText(loadingText => loadingText + '.');
            setDotCount(dotCount => dotCount + 1);
            if(dotCount >= 3){
                setDotCount(dotCount => 0);
                setLoadingText(loadingText => "Loading");
            }
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [dotCount]);

    return(
        <div className="loadingSpinnerContainer">
            <h2>{loadingText}</h2>
        </div>
    );
}

export default LoadingSpinner;
