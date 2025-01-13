// src/components/About.js
import React from 'react';

const About = () => {
    return (
        <section id="about">
            <h2>About Us</h2>
        
                 <p>घर का नक्शा वास्तु के अनुसार</p>

<p>इंटीरियर एवं एक्सटीरियर</p>

<p> साइट सुरपविजन एवं कन्स्ट्रक्शन</p>

<p> स्टीमेटिंग के लिए सम्पर्क करें।</p>

<p>3D एवं 2D स्ट्रक्चर भी ड्राइंग किया जाता है।<br>
</br>

नगर पंचायत द्वारा किसी भी प्रकार के भवन या मकान का नक्शा पास कराया जाता है।<br></br>

मैटेरियल के साथ लेवर कास्ट।</p>

<div className="parent-container">
      {/* Left Div */}
      <div className="left-content">
      {/* <img
          src="/left-image.jpg"
          alt="Left section"
          className="content-image"
        /> */}
        <h2 className="content-title">Er. Ashwani Mishra</h2>
        <p className="content-text">
        Mob.: 7985381156
        </p>
      </div>

      {/* Right Div */}
      <div className="right-content">
      {/* <img
          src="/right-image.jpg"
          alt="Right section"
          className="content-image"
        /> */}
        <h2 className="content-title">Er. Sahil Shriastav</h2>
        <p className="content-text">
        Mob.: 8543809416
        </p>
      </div>
    </div>

        </section>
    );
};

export default About;
