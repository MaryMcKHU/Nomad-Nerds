import React from 'react';
import background from "../images/airballoons.jpg";
import CitySearch from '../searchByCity/citySearch';

function HeroBanner() {
    return (
        <article className='hero-banner'
            style={{
                height:'100%',
            }}>
            <img
                src={background}
                style=
                {{
                    objectFit:'cover', 
                    width:'100%', 
                    height:'100%',
                    display:'flex'
                }}
                alt=""
            >
            </img>           
            <h1
                className='font-link2' 
                style={{
                    fontSize:'2rem',
                    color:'white',
                    textAlign:'center',
                    position:'absolute',
                    height:'fit-content',
                    fontWeight:'bolder',
                    display:'inline-flex'
                }}>
                Your next adventure awaits...
                <CitySearch />
            </h1>
          </article>
    )
}

export default HeroBanner