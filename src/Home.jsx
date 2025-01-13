// src/components/Home.js
import React from 'react';
// import sidepic from '../assets/sidepic.jpeg';
// import images from './assets/images/company-image.jpeg';
import './Home.css';


const Home = () => {
    return (
        <section className="home-container">
      <h1 className="home-heading"> Aditya Design Construction</h1>
      <p className="home-text">Building Dreams, One Brick at a Time.</p>
      <p className="home-text">Expert Construcion & Renovation Services.</p>
     <p className="home-text">Residential & Commercial Project.</p>
      <p className="home-text">We specialize in innovative solutions and cutting-edge technology..</p>

            <img 
        src="/src/assets/images/main.jpeg"     
            alt="A description of the image" 
        className="home-image" 
      />

            <div className='Address'>
<div className="div-address">
<div className="div-address-title">पता:</div>
<p className="div-address-details">
निकट चौकियाँ माता मन्दिर (फायर स्टेशन),<br />
अडानी पेट्रोल पम्प, विशेषरपुर, जौनपुर
</p>
</div>
</div>

        </section>
    );
};
// const Home = () => {
//   return (
//     <div className="home-container">
//       <h1 className="home-heading"> Aditya Design Construction</h1>
//       <p className="home-text">Building Dreams, One Brick at a Time.</p>
//       <p className="home-text">Expert Construcion & Renovation Services.</p>
//       <p className="home-text">Residential & Commercial Project.</p>
//       <p className="home-text">We specialize in innovative solutions and cutting-edge technology..</p>

//       <img 
//         src="/src/assets/images/main.jpeg"     
//             alt="A description of the image" 
//         className="home-image" 
//       />

export default Home;
  
  