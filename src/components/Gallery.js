import React from 'react';
import screening from '../images/machine-01-300x274.png';
import handling from '../images/machine-02-300x274.png';
import grit from '../images/machine-03-300x274.png';
import sludge from '../images/machine-04-300x274.png';

function Gallery() {
    return (
        <section className='gallery-container'>
            <h2>Customized per order</h2>
            <p>Just as no two treatment plants are the same, no two of our screening, grit handling or sludge thickening products are either. We’ll help determine exactly what you need.</p>
            <div className='image-gallery'>
                <div className='image-container'>
                    <img src={screening} alt="Vulcan screening" />
                    
                        <h3>Screening</h3>
                        <a href="">View Selection</a>
                    
                </div>
                <div className='image-container'>
                    <img src={handling} alt="Vulcan screenings handling" />

                        <h3>Screenings Handling</h3>
                        <a href="">View Selection</a>
                    
                </div>
                <div className='image-container'>
                    <img src={grit} alt="Vulcan grit handling" />
                    
                        <h3>Grit Handling</h3>
                        <a href="">View Selection</a>
                    
                </div>
                <div className='image-container'>
                    <img src={sludge} alt="Vulcan sludge thickening " />
                    
                        <h3>Sludge Thickening</h3>
                        <a href="">View Selection</a>
                    
                </div>
                </div>
        </section>
    )
}

export default Gallery;