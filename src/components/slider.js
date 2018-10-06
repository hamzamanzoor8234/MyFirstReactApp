import React from 'react';

const Slider=()=>{
    return <div id='fullSlider'>
        <div className="slider fullscreen">
            <ul className="slides">
                <li>
                    <img src="images/043.jpg" alt='img1'/> 
                    <div className="caption center-align">
                        <h3>This is our big Tagline!</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="images/044.jpg" alt='img2'/> 
                    <div className="caption left-align">
                        <h3>Left Aligned Caption</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="images/045.jpg" alt='img3'/> 
                    <div className="caption right-align">
                        <h3>Right Aligned Caption</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="images/046.jpg" alt='img4'/> 
                    <div className="caption center-align">
                        <h3>This is our big Tagline!</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
            </ul>
        </div>
    </div>
}
export default Slider;