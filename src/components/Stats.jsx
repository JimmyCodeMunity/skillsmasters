import React from 'react';
import { stats } from '../constants';

const Stats = () => {
    return (
        <section className='flex flex-row flex-wrap items-center mx-auto w-full justify-center sm:my-20 my-6'>
            {stats.map((stat) => (
                <div key={stat.id} className='flex-1 flex justify-start items-center flex-row m-3'>
                    <h4 className='font-poppins font-semibold xs:text-[40px] text-[20px] xs:leading-[43px] text-black'>{stat.value}</h4>
                    <p className='font-poppins font-normal xs:text-20px text-[12px] xs:leading-[26px] leading-[21px]  text-black'>{stat.title}</p>
                </div>
            ))}
        </section>
    );
}

export default Stats;