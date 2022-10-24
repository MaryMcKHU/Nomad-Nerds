import React from 'react';
import background from "./images/airballoons.jpg";
import CitySearch from './searchByCity/citySearch';

function HeroBanner() {
    return (
        <article 
            style={{
                height:'100%',
                position:'relative',
                overflow:'hidden'
            }}>
            <img
                src={background}
                style=
                {{
                    objectFit:'cover', 
                    width:'100%', 
                    height:'100%',
                }}
            >
            </img>
            
            <h1
                className='font-link2' 
                style={{
                    fontSize:'50px',
                    color:'white',
                    textAlign:'center',
                    position:'absolute',
                    top:320,
                    bottom:0,
                    left:0,
                    right:0,
                    height:'fit-content',
                    margin:'auto',
                    fontWeight:'bolder',
                }}>
                Your next adventure awaits...<CitySearch />
            </h1>
            
          </article>
    )
}

export default HeroBanner