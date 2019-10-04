import React from 'react';


function RandomBeer(props){

    const randomNumber = ~~(Math.random()*props.beers.length);
    const randomActualBeer = props.beers[randomNumber];

    if(props.ready){    
        return(
            <div>
                <h2> {randomActualBeer.name} </h2>
                <h4> {randomActualBeer.tagline} </h4>
                <img 
                    style={{width: '100px'}} 
                    src={randomActualBeer.image_url} 
                    alt="random beer"
                />
                <p> Creator: {randomActualBeer.contributed_by} </p>
            </div>
        )
    } 
    else return(<div>Loading...</div>)
}

export default RandomBeer;
