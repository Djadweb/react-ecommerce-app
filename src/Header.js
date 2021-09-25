import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './scss/Header.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
//import { AddReactionRounded } from '@mui/icons-material';

function Header() {
    const [open, setOpen] = useState(false);  
    const toggleInfo = () => {
        setOpen(open ? false : true);
    }
    return (
        <div className="header">
            <div className="announcement-bar">
                <div className="container">
                    <div className="announcement__date" >
                        <span id="days">Mon-Thu:</span>
                        <span id="time">9:00 AM - 5:30 PM</span>
                        <ArrowDropDownIcon onClick={() => toggleInfo()} />
                    </div>
                    <div className="announcement">
                        <span>Visit our showroom in 1234 Street Adress City Address, 1234</span>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <div className="contact-methods">
                        <span>Call Us: (00) 1234 5678</span>
                        <FacebookIcon />
                        <InstagramIcon />
                    </div>         
                    { open ? <ShopInfo /> : null }                    
                </div>                                
            </div>  
            
        </div>
    )
}

function ShopInfo() {    
    return(
        <div className="shop-info">
            <div className="open-time">
                <AccessTimeIcon />
                <div className="time">
                    <div>We are open:</div>                    
                    <div>
                        <span id="days">Mon-Thu:</span>
                        <span id="time">9:00 AM - 5:30 PM</span>
                    </div>
                    <div>
                        <span id="days">Fr:</span>
                        <span id="time">9:00 AM - 6:00 PM</span>
                    </div>
                    <div>
                        <span id="days">Mon-Thu:</span>
                        <span id="time">11:00 AM - 5:00 PM</span>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="address">
            <RoomOutlinedIcon />
                <div className="shop-address">
                    <div>Address: 1234 Street Adress, City Address, 1234</div>                                        
                </div>
            </div>
            <hr/>
            <div className="contact">
                <div>
                    <span>Phone:</span>
                    <span id="phone">(00) 1234 5678</span>
                </div>
                <div>
                    <span>Email:</span>
                    <span id="email">shop@email.com</span>
                </div>
            </div>
        </div>
    )    
}



export default Header
