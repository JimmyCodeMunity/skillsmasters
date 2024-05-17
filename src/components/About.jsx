import React from 'react';


const About = () => {
    const user = localStorage.getItem('user');
    return (
        <section id='home' className="">
            <div className="pt-6 sm:pt-16 text-center">
                <h1 className="font-poppins font-normal text-black text-[30px]">About Us</h1>
            </div>
            <div className="flex md:flex-row flex-col-reverse py-6 sm:py-10">

                <div className="flex-1 flex justify-center items-center md:my-10 relative sm:px-16 px-6">
                    <img src='/images/kid3.png' alt="" className="w-[100%] h-[100%] rounded-3xl relative z-[5]" />
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                </div>
                <div className="flex-1 flex justify-center items-start flex-col xl:px-0 md:px-16 px-6">

                    <p className=" max-w-[500px] relative font-poppins font-normal text-black text-[16px] leading-[30.8px]">
                        Skills Masters is the global home of excellence for design-led thinking.
                        We are a team of passionate and dedicated individuals from various fields
                        brought together with a shared vision of equipping young people with
                        prerequisite skills to prepare them for a digital future. Our mission is
                        to empower our learners with skills through interactive learning and
                        encourage them to develop critical thinking and problem-solving skills
                        at a very early age. We aim to empower learners from all walks of life
                        with skills that enable them to be global citizens in the digital world.
                        Our curriculum is carefully desined to impart critical thinking and problem
                        solving skills to our learners creating solutions in a dynamic environment.
                        Our mission is to promote
                        this mindset shift by making design-led thinking accessible to everyone, and a standard practice.
                    </p>


                </div>
            </div>


        </section>
    );
}

export default About;