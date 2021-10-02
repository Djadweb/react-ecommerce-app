import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './scss/Footer.scss'
import './scss/buttons.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import paypal from './assets/payement/paypal.png';
import visa from './assets/payement/visa.png';
import maestro from './assets/payement/maestro.png';
import discover from './assets/payement/discover.png';
import americanexpress from './assets/payement/american-express.png';

function Footer() {      
    return (
        <footer className="footer">
            <div className="container">
                    <div className="signup">
                        <div>
                            <h1>Sign Up To Our Newsletter.</h1>
                            <p>Be the first to hear about the latest offers.</p>
                        </div>
                        <div className="email">
                            <input className="email" type="text" placeholder="Your Email"/>
                            <Button className="btn3">Subscribe</Button>
                        </div>
                    </div>
                    <div className="links">                        
                        <LinksColumn 
                            title="Information"
                            links={['About Zip', 
                                    'Privacy Policy',
                                    'Search',
                                    'Terms',
                                    'Orders and Returns',
                                    'Contact Us',
                                    'Advanced Search',
                                    'Newsletter Subscription'
                                  ]}
                        />
                        <LinksColumn 
                            title="PC Parts"
                            links={['CPUS', 
                                    'Add On Cards',
                                    'Hard Drives (Internal)',
                                    'Graphic Cards',
                                    'Keyboards / Mics',
                                    'RAM (Memory)',
                                    'Software',
                                    'Speakers / Headsets',
                                    'Motherboards'
                                  ]}
                        />
                        <LinksColumn 
                            title="Desktop PCs"
                            links={['Custom PCs', 
                                    'Servers',
                                    'MSI All-In-One PCs',
                                    'HP/Compaq PCs',
                                    'ASUS PCs',
                                    'RAM (Memory)',
                                    'Cases / Power Supplies / Cooling',
                                    'Tecs PCs'
                                  ]}
                        />
                        <LinksColumn 
                            title="Laptops"
                            links={['Custom PCs', 
                                    'Everyday Use Notebooks',
                                    'MSI Workstation Series',
                                    'MSI Prestige Series',
                                    'Tablets and Pads',
                                    'Netbooks',
                                    'Infinity Gaming Notebooks'
                                  ]}
                        />
                        <LinksColumn 
                            title="Address"
                            links={['Address: 1234 Street Adress City Address, 1234', 
                                    'Phones: <span>(00) 1234 5678</span>',
                                    'We are open: Monday-Thursday: 9:00 AM - 5:30 PM',
                                    'Friday: 9:00 AM - 6:00 PM',
                                    'Saturday: 11:00 AM - 5:00 PM',
                                    'E-mail: <span>shop@email.com</span>'  
                                  ]}
                        />
                    </div>
                    <div className="bottom">
                        <div className="social-media">
                            <a href="https://facebook.com" target="_blank"><FacebookIcon/></a>
                            <a href="https://instagram.com" target="_blank"><InstagramIcon/></a>
                        </div>                        
                        <div className="payments">
                            <img src={paypal} alt="" />
                            <img src={visa} alt="" />
                            <img src={maestro} alt="" />
                            <img src={discover} alt="" />
                            <img src={americanexpress} alt="" />
                        </div>
                        <div className="copyright">
                            <p>Copyright © 2020 Shop Pty. Ltd.</p>
                        </div>
                    </div>
            </div>            
        </footer>
    )
}
export default Footer


function LinksColumn(props) {
    const [opened, setOpened] = useState(false);
    return(
        <div className={opened ? "link-column opened-links" : "link-column closed-links"} onClick={(e) => setOpened(!opened)}>
            <p>{ props.title }</p>
            {props.links.map(link => 
                (<Link className="link">{ link }</Link>)
            )}        
       </div>        
    )
}
