import React from 'react';
import screeningSmall from '../images/machine-01-300x274.png';
import handlingSmall from '../images/machine-02-300x274.png';
import gritSmall from '../images/machine-03-300x274.png';
import sludgeSmall from '../images/machine-04-300x274.png';
import screeningMedium from '../images/machine-01-768x702.png';
import handlingMedium from '../images/machine-02-768x702.png';
import gritMedium from '../images/machine-03-768x702.png';
import sludgeMedium from '../images/machine-04-768x702.png';
import screeningLarge from '../images/machine-01-912x834.png';
import handlingLarge from '../images/machine-02-912x834.png';
import gritLarge from '../images/machine-03-912x834.png';
import sludgeLarge from '../images/machine-04-912x834.png';

function Gallery() {
    return (
        <section className='gallery-container'>
            <h2>Customized per order</h2>
            <p>Just as no two treatment plants are the same, no two of our screening, grit handling or sludge thickening products are either. We’ll help determine exactly what you need.</p>
            <div className='image-gallery'>
                <div className='image-container'>
                    <img src={screeningSmall}
                        alt="Vulcan screening"
                        srcSet={`${screeningSmall} 300w, ${screeningMedium} 768w, ${screeningLarge} 1280w`}
                        sizes='calc(100vw - 10px)' />
                    <h3>Screening</h3>
                    <a href="/">View Selection</a>

                </div>
                <div className='image-container'>
                    <img src={handlingSmall} alt="Vulcan screenings handling"
                        srcSet={`${handlingSmall} 300w, ${handlingMedium} 768w, ${handlingLarge} 1280w`}
                        sizes='calc(100vw - 10px)' />
                    <h3>Screenings Handling</h3>
                    <a href="/">View Selection</a>
                </div>
                <div className='image-container'>
                    <img src={gritSmall} alt="Vulcan grit handling"
                        srcSet={`${gritSmall} 300w, ${gritMedium} 768w, ${gritLarge} 1280w`}
                        sizes='calc(100vw - 10px)' />
                    <h3>Grit Handling</h3>
                    <a href="/">View Selection</a>
                </div>
                <div className='image-container'>
                    <img src={sludgeSmall} alt="Vulcan sludge thickening"
                        srcSet={`${sludgeSmall} 300w, ${sludgeMedium} 768w, ${sludgeLarge} 1280w`}
                        sizes='calc(100vw - 10px)' />
                    <h3>Sludge Thickening</h3>
                    <a href="/">View Selection</a>

                </div>
            </div>
        </section>
    )
}

export default Gallery;