import React from 'react'

import account from "./assets/account.png"
import savings from "./assets/savings.png"
import support from "./assets/support.png"

function Support() {
    return (
        <div className="support">                    
            <img src={support} alt="" className="benifit" />       
            <img src={account} alt="" className="benifit" />       
            <img src={savings} alt="" className="benifit" />       
        </div>            
    )
}
export default Support
