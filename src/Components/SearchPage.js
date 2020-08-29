import React from 'react'
import '../Css/SearchPage.css';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import { Link } from 'react-router-dom';
import Search from './Search';

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();

    //LIVE API CALL
    //const { data } = useGoogleSearch(term); 

    const data = Response;
    
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img 
                        className="searchPage_logo"
                        src="https:/www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt=""
                    />
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButton/>
                </div>
            </div>

            <div className="searchPage_result">

            </div>
        </div>
    )
}

export default SearchPage;
