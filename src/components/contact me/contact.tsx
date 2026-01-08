import React from 'react';
import './contact.css';
import amazon from '../../assets/amazon.png';
import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';
import airbnb from '../../assets/room-service.png';
import netflix from '../../assets/Netflix.png';

const Contact = () => {
  return (
      <secton id="contactP">
        <div className="clients">
          <h1 className="contactPtitle"> My Clients</h1>
          <p className="clientsDesc">
            i have the opportunity to work with amazing clients
            including individuals, startups, and established businesses.
            Each project is a chance to bring their vision to life and create
            something impactful together.
          </p>
          <div className="clientsImg">
            <img src={amazon} alt="Google" className="clientImg"/>
            <img src={facebook} alt='facebook' className="clientImg"/>
            <img src={google} alt='google' className="clientImg"/>
            <img src= {airbnb} alt="Airbnb" className="clientImg"/>
          </div>
        </div> 


        

      </secton>
  );
};

export default Contact;