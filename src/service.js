import React from "react";

import "./service.css";

function Service()
{
    return (
        <div className="service">
            <div className="service-content">
                <h2 className="service-h2">At Your Service</h2>
                <div className="service-items">
                    <div className="service-box">
                        <i  class="service-i far fa-gem"></i>
                        <h3 className="service-h3">Sturdy Themes</h3>
                        <p className="service-p">Our themes are updated regularly to keep them bug free!</p>
                    </div>
                    <div className="service-box">
                        <i class="service-i fas fa-laptop"></i>
                        <h3 className="service-h3">Up to Date</h3>
                        <p className="service-p">All dependencies are kept current to keep things fresh.</p>
                    </div>
                    <div className="service-box">
                        <i class="service-i fas fa-globe"></i>
                        <h3 className="service-h3">Ready to Publishs</h3>
                        <p className="service-p">You can use this design as is, or you can make changes!</p>
                    </div>
                    <div className="service-box">
                        <i class="service-i far fa-heart"></i>
                        <h3 className="service-h3">Made with Love</h3>
                        <p className="service-p">Is it really open source if it's not made with love?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;