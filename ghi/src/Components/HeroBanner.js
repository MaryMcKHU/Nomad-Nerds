import React, { useEffect } from 'react';
import CitySearch from '../searchByCity/citySearch';
import AOS from 'aos'
import 'aos/dist/aos.css'

function HeroBanner() {
    useEffect(()=> {
        AOS.init({duration: 2000});
    }, []);

    return (
        <div className='hero-container'>
            <h1 className='hero-header' data-aos="fade-down">
                Your next adventure awaits...
            </h1>
            <div className='city-search'>
                <CitySearch />
            </div>
        </div>
    )
}

export default HeroBanner