import React from 'react';
import './work.css'

const Work = () => {
    return (
        <>
        <div id='workRow1' className='row justify-content-md-center'>
            <div id='topLeft' className='col-md-6 text-center align-middle p-0 border border-dark'>
                <span>Bridal Hair</span>
            </div>

            <div id='topRight' className='col-md-6 text-center align-middle p-0 border border-dark'>
                <span>Bridal Makeup</span>
            </div>
        </div>

        <div id='workRow1' className='row justify-content-md-center'>
            <div id='bottomLeft' className='col-md-6 text-center align-middle p-0 border border-dark'>
                <span>Salon</span>
            </div>

            <div id='bottomLeft' className='col-md-6 text-center align-middle p-0 border border-dark'>
                <span>Exotic Colors</span>
            </div>
        </div>

        </>
    )
}

export default Work;