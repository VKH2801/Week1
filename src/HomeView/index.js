import React from 'react';
import imgPhone1 from '../assets/images/imgPhone1.png';
import imgPhone2 from '../assets/images/imgPhone2.png';


function HomeView(props) {
    return (
        <div className='home'>
            <div className='ContainerStore'>
                <h3>Food app</h3>
                <h1>Why stay hungry
                    when you can order
                    form Bella Onojie
                </h1>
                <h2>Download the bella onoje’s
                    food app now on
                </h2>
                <div className='ContainerBtnStore'>
                    <button>Playstore</button>
                    <button>App store</button>
                </div>
            </div>

            <div className='ContainerImgHeader'>
                <img src={imgPhone1}></img>
                <img src={imgPhone2}></img>
            </div>
            <div className='ContainerUnderlineDesktop'></div>
            <div className='ContainerHomeFooter'>How the app works</div>
        </div>
    );
}

export default HomeView;