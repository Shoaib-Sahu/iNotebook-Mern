import React from 'react'
import Notes from '../components/Notes'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container my-4'>
                <Notes />
            </div>
        </>
    )
}

export default Home