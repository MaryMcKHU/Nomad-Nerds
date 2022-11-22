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
                    height:'100%',
                    fontWeight:'bolder',
                    display:'flex',
                    marginTop:'25%'
                }}>
                Your next adventure awaits...
                <CitySearch />
            </h1>
          </article>
    )
}

export default HeroBanner