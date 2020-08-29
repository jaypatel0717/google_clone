import React from 'react'
import '../Css/Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="home_header">
                <div className="home_header_left">
                    <Link to="/advertising">Advertising</Link>
                    <Link to="/business">Business</Link>
                    <Link to="/howSearchWork">How Search works</Link>
                </div>
                <div className="home_header_right">
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/terms">Terms</Link>
                    <Link to="/setting">Setting</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
