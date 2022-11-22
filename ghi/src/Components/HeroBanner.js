import React from 'react';
import CitySearch from '../searchByCity/citySearch';

function HeroBanner() {

    return (
        <div className='hero-container'>
            <h1 className='hero-header' 
                >Your next adventure awaits...
            </h1>
            <div className='city-search'>
                <CitySearch />
            </div>
        </div>
    )
}

export default HeroBanner