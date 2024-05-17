import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

import Footer from '../components/Footer';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';




const HomePage = ({ loggedIn, handleLogout }) => {
    const [loading, setLoading] = useState(false);
    const [loadproducts, setLoadProducts] = useState(false);
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className="flex px-6 sm:px-16 justify-center items-center">
                <div className="w-full xl:max-w-[1280px]">
                    <Navbar logged={loggedIn} />
                </div>
            </div>


            <div className="flex justify-center md:my-14 my-6 items-start bg-primary">
                <div className="w-full xl:max-w-[1280px]">
                    <Hero logged={loggedIn} />
                </div>
            </div>
            <div className="flex justify-center w-full mx-auto md:my-14 my-6 items-start bg-primary">
                <div className="w-full mx-auto xl:max-w-[1280px]">
                    <Stats />
                </div>
            </div>
            <div className="flex justify-center md:my-14 my-6 items-start bg-primary">
                <div className="w-full xl:max-w-[1280px]">
                    <About />
                </div>
            </div>
            <div className="flex justify-center md:my-14 my-6 items-start bg-primary">
                <div className="w-full xl:max-w-[1280px]">
                    <Services />
                </div>
            </div>




            <div className="flex justify-center items-start md:px-16 px-6 bg-primary">
                <div className="w-full xl:max-w-[1280px]">

                    <Footer />
                </div>
            </div>

        </div>
    );
}

export default HomePage;