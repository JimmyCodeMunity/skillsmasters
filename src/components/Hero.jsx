import React from 'react';
import * as Icon from 'react-feather'


const Hero = () => {
    // const user = localStorage.getItem('user');
    return (
        <section id='home' className="flex md:flex-row flex-col py-6 sm:py-16">
            <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
                <div className="items-center justify-between w-full">
                    <h1 className="text-black flex-1 font-poppins font-semibold ss:text-[62px] text-[30px] ss:leading-[100px] leading-[75px]">
                        Welcome To <br className="hidden sm:block" /> {" "}
                        <span className="bg-gradient-to-t from-blue-500 via-yellow-500 to-teal-500 text-transparent bg-clip-text">Skill Masters</span>
                        <br className="hidden sm:block" />
                    </h1>



                </div>


                <h1 className="font-poppins text-black font-semibold text-[40px] ss:text-[68px] leading-[75px] ss:leading-[100px]">
                    Africa.
                </h1>
                <div className='md:py-10'>
                    <div className="justify-center flex items-center bg-black h-12 w-60 rounded-2xl">
                        <a href="flex justify-center items-center space-x-5" className="text-white font-poppins text-xl">Get Started</a>
                        <Icon.ChevronRight color="white" size={20} />
                    </div>
                </div>

            </div>



            <div className="flex-1 flex h-full justify-center items-center md:my-10 relative">
                <img src="images/kid3.png" className="h-[100%] w-[100%] z-[20]" alt="" />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-[0] w-[80%] h-[80%] right-20 bottom-20 blue__gradient" />
            </div>
            


        </section>
    );
}

export default Hero;