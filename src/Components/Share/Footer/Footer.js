import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook , faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className='footer-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 col-sm-6 col-sx-12 segment-one'>
                            <h3>About us</h3>
                            <p>Sun Glasses Company. Post Sourcing Requests to Get Quality Quotations Today. SGS Audited Suppliers. Quality China Products. China’s B2B Impact Award. Leading B2B Portal. Highlights: Apps Available, Chat Support Available, Quotations Available.</p>
                        </div>
                        <div className='col-md-3 col-sm-6 col-sx-12 segment-two'>
                            <h2>Importent Links</h2>
                           <ul>
                               <li> <Link style={{textDecoration: 'none',color: '#999'}}> about </Link>
                               </li>
                               <li> <Link  style={{textDecoration: 'none',color: '#999'}}>product</Link> </li>
                               <li> <Link  style={{textDecoration: 'none',color: '#999'}}>admin</Link> </li>
                               <li> <Link  style={{textDecoration: 'none',color: '#999'}}>contact</Link> </li>
                               <li> <Link  style={{textDecoration: 'none',color: '#999'}}>Support</Link> </li>
                            </ul>
                        </div>
                        <div className='col-md-3 col-sm-6 col-sx-12 segment-there'>
                            <h2>follow us</h2>
                            <p>please follow us in our social media profile, in order to keep updated. </p>
                           
                              <a> <FontAwesomeIcon className="i" icon={faFacebook} /> </a> 
                              <a> <FontAwesomeIcon className="i" icon={faInstagram} /> </a> 
                              <a> <FontAwesomeIcon className="i" icon={faTwitter} /> </a> 
                              <a> <FontAwesomeIcon className="i" icon={faLinkedin} /> </a> 
                         
                        </div>
                        <div className='col-md-3 col-sm-6 col-sx-12 segment-four'>
                            <h2>Our Newsletter</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and
                                 typesetting industry. Lorem Ipsum has been the industry's
                                  standard dummy  text ever since the 1500s</p>
                            <input type="email" name="" value=""/>
                            <input className="f-submit" type="submit" name="" value="Subscribe"/>
                        </div>

                    </div>
                </div>
                <p className="footer-bottom-text"> All right reserved by @copy;Divinector.2019 </p>
            </div>
        </div>
    );
};

export default Footer;