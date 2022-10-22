import React from 'react';
import airballoons from "./images/airballoons.jpg";

function HeroBanner() {
    return (
        <div>
            <img 
                src={airballoons}
                style={{ overflow: "hidden", display:'flex', position:'relative' }}
            >
            </img>
            <h1 className="display-5 text-on-image" style={{color:'black'}}>
              <span className='font-link'>
                Find your next adventure...
              </span>
            </h1>
          </div>
    )
}

export default HeroBanner