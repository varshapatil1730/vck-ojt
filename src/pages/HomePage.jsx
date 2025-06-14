import React, { useState } from "react";
import Header from "../components/Header/Headers";
import Footer from "../components/Footer/Footers";
import './HomePage.css'; 

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div id="pqr">
      <Header/>
    <div className="home-scroll-container">
      
    
      
      <div className="banner-container">
        <h1 className="home-title">Welcome to Vivekanand <br/> College!</h1>
        <p>Your journey to excellence starts here.</p>
        <div className="button-wrapper">
        <a href="/apply" className="cta-button">Apply Now!</a>
        </div>
      </div>
        <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
        <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
     
      < div>  
    
        <h2 id="poi">Why Choose Vivekanand College?</h2>
        <ul id="poi">
          <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
          <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
          <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
          <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
          <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
        </ul>
        <div>
          <h2 id="poi"> Campus Life & Facilities</h2>
          <img src="/Images/students.jpeg" alt="Campus View 1" className="gallery-image" />
          <img src="/Images/campus-life.jpg" alt="Campus View 2"className="gallery-image taller-image"/>
          </div>
          <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
        
        
        <p>Ready to explore our courses?</p>
        <div className="button-wrapper"> 
        <a href="/courses" className="cta-button-e" onClick={() => setShowForm(true)}>Explore Courses</a>
        </div>
        
        {/* Future: Admission Form Component */}
        {/* {showForm && <AdmissionForm />} */}
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default HomePage;
