import React from 'react';
import background from "../images/airballoons.jpg";
import CitySearch from '../searchByCity/citySearch';

function HeroBanner() {

    return (
        <article className='hero-banner'>
            <img
                src={background}
                style=
                {{
                    objectFit:'cover', 
                    position:'top-center',
                    marginTop:0,
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
                    position:'absolute',
                    height:'100%',
                    fontWeight:'bolder',
                    display:'block',
                    marginTop:'60%',
                    marginLeft:'40%'
                }}>
                Your next adventure awaits...
                <CitySearch />
            </h1>
          </article>
    )
}

export default HeroBanner