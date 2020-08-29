import React from 'react'
import '../Css/SearchPage.css';
import { useStateValue } from './StateProvider';

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();

    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <h2>{term}</h2>
            </div>
            
            <div className="searchPage_result">

            </div>
        </div>
    )
}

export default SearchPage;
