import React from 'react';
import { Link } from "gatsby";
import './work.css';

const Work = () => {
    return (
        <>
        <div id='workRow1' className='row justify-content-md-center'>
            <div id='topLeft' className='col-md-6 text-center align-middle p-0 border border-dark'>
                <Link to="/bridal-hair/">
                    <span>BRIDAL HAIR</span>
                </Link>
            </div>

            <div id='topRight' className='col-md-6 text-center align-middle p-0 border border-dark'>
                <Link to="/bridal-makeup/">
                    <span>BRIDAL MAKEUP</span>
                </Link>
            </div>
        </div>

        <div id='workRow1' className='row justify-content-md-center'>
            <div id='bottomLeft' className='col-md-6 text-center align-middle p-0 border border-dark'>
                <Link to="salon">
                    <span>SALON</span>
                </Link>
            </div>

            <div id='bottomRight' className='col-md-6 text-center align-middle p-0 border border-dark'>
                <Link to="/exotic-colors/">
                    <span>EXOTIC COLORS</span>
                </Link>
            </div>
        </div>

        </>
    )
}

export default Work;