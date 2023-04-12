import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Joe, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Currently saying yes to all new adventures and hey, I am on wild journey of growing my business and help other people put their businesses online, grow and make sales. The mission is to help businesses and entrepreneurs solve their problems. I am a Young Entrepreneur consumed by the desire to solve every problem, always learning, whether its how to lead, grow and get the experience in the Internet of things.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
