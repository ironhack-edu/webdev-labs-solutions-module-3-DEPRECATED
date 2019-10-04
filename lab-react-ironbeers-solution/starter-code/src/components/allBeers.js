import React from 'react';



function AllBeers(props){

    // console.log("props in AllBeers component: ", props);

    const showBeers = () =>{
        return props.beers.map( eachBeer =>{
            return (
                <div key={eachBeer._id}>
                    <h2>
                        {eachBeer.name}
                    </h2>
                    <h4>{eachBeer.tagline}</h4>
                        <img 
                            style={{width: '100px'}} 
                            src={eachBeer.image_url} 
                            alt="the beer"
                        />

                    <p>Creator: {eachBeer.contributed_by}</p>
                </div>
            )
        })
    }

    if(props.ready) return (<div> {showBeers()} </div>)
    else return(<div>Loading...</div>)    
}

export default AllBeers;