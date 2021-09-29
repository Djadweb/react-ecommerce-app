import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './scss/Footer.scss'
import './scss/buttons.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                    <div className="signup">
                        <div>
                            <h1>Sign Up To Our Newsletter.</h1>
                            <p>Be the first to hear about the latest offers.</p>
                        </div>
                        <div>
                            <input className="email" type="text" placeholder="Your Email"/>
                            <Button className="btn3">Subscribe</Button>
                        </div>
                    </div>
                    <div className="links">
                        <div className="link-column">
                            <p>Information</p>
                            <Link className="link">About Zip</Link>
                            <Link className="link">Privacy Policy</Link>
                            <Link className="link">Search</Link>
                            <Link className="link">Terms</Link>
                            <Link className="link">Orders and Returns</Link>
                            <Link className="link">Contact Us</Link>
                            <Link className="link">Advanced Search</Link>
                            <Link className="link">Newsletter Subscription</Link>                    
                        </div>
                        <div className="link-column">
                            <p>PC Parts</p>
                            <Link className="link">CPUS</Link>
                            <Link className="link">Add On Cards</Link>
                            <Link className="link">Hard Drives (Internal)</Link>
                            <Link className="link">Graphic Cards</Link>
                            <Link className="link">Keyboards / Mice</Link>
                            <Link className="link">Cases / Power Supplies / Cooling</Link>
                            <Link className="link">RAM (Memory)</Link>
                            <Link className="link">Software</Link>                    
                            <Link className="link">Speakers / Headsets</Link>                    
                            <Link className="link">Motherboards</Link>                    
                        </div>
                        <div className="link-column">
                            <p>Desktop PCs</p>
                            <Link className="link">Custom PCs</Link>
                            <Link className="link">Servers</Link>
                            <Link className="link">MSI All-In-One PCs</Link>
                            <Link className="link">HP/Compaq PCs</Link>
                            <Link className="link">ASUS PCs</Link>
                            <Link className="link">Cases / Power Supplies / Cooling</Link>
                            <Link className="link">Tecs PCs</Link>                                          
                        </div>
                        <div className="link-column">
                            <p>Laptops</p>
                            <Link className="link">Evryday Use Notebooks</Link>
                            <Link className="link">MSI Workstation Series</Link>
                            <Link className="link">MSI Prestige Series</Link>
                            <Link className="link">Tablets and Pads</Link>
                            <Link className="link">Netbooks</Link>
                            <Link className="link">Infinity Gaming Notebooks </Link>                               
                        </div>
                        <div className="link-column">
                            <p>Laptops</p>
                            <p className="link">Address: 1234 Street Adress City Address, 1234</p>                            
                            <p className="link">Phones: <span>(00) 1234 5678</span></p>                            
                            <p className="link">We are open: Monday-Thursday: 9:00 AM - 5:30 PM</p>                            
                            <p className="link">Friday: 9:00 AM - 6:00 PM</p>                            
                            <p className="link">Saturday: 11:00 AM - 5:00 PM</p>                            
                            <p className="link">E-mail: <span>shop@email.com</span></p>                                                      
                        </div>  
                    </div>
                    <div className="bottom"></div>
            </div>            
        </footer>
    )
}
export default Footer