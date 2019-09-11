import React from 'react';
import MainPic from '../images/fixModel.jpg';
import './home.css'

const Home = () => {
    return (
        <div id='home' className='row-fluid m-0 justify-content-md-center pt-5'>
            <div id='homeCol' className='col-md-12 p-0 pt-4'>
                <img id='mainPic' className='w-100' src={MainPic} alt='' />
            </div>
        </div>
    )
}

export default Home;