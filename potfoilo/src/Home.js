import React from 'react';
import './Home.css';
import Carousel from './Carousel'
const Home = () => {
  return (
    <section id="home">
   <h2 id='intro'>Hello I am Ranjith!..</h2><div className='containr'><div data-aos="zoom-in-right" className='content'></div>
   <div style={{ height: '400px', width: '500px' ,flex: '1',marginLeft:'300px',marginTop:'40px',position: 'relative' }}>
  
  <Carousel
    baseWidth={500}
    
    autoplay={true}
    autoplayDelay={3000}
    pauseOnHover={true}
    loop={true}
    round={false}
  />
</div></div>
   <h2 id='content'>Full-Stack Developer | Problem Solver | Tech Enthusiast</h2>
   <div data-aos="zoom-in-right"><p>I build scalable, user-friendly web applications that solve real-world problems. Let's create something amazing together!</p> </div> 

    </section>
  );
};

export default Home;