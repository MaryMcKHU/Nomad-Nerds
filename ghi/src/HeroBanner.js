import React from 'react';
import background from "./images/airballoons.jpg";
import CitySearch from './searchByCity/citySearch';

function HeroBanner() {
    return (
        <article 
            style={{
                height:'100%',
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
                alt=""
            >
            </img>
            
            <h1
                className='font-link2' 
                style={{
                    fontSize:'50px',
                    color:'white',
                    textAlign:'center',
                    position:'absolute',
                    top:0,
                    bottom:0,
                    left:0,
                    right:0,
                    height:'fit-content',
                    marginTop: 330,
                    fontWeight:'bolder',
                }}>
                Your next adventure awaits...<CitySearch />
            </h1>
          </article>
    )
}

export default HeroBanner