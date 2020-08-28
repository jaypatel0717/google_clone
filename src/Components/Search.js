import React, { useState } from 'react';
import '../Css/Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { actionTypes }  from "./reducer";

function Search({ hideButton = false }) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] =  useState("");
    const history = useHistory();

    const searchdata = (e) =>{
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push('/search');
    };

    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon"/>
                <input 
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                    type="text"
                />
                <MicIcon/>
            </div>
            {!hideButton ? (
                <div className="search_buttons">
                    <Button 
                        type="submit" 
                        onClick={searchdata} 
                        variant="outlined">Google Search
                    </Button>
                    <Button 
                        variant="outlined">I'm Feeling Lucky
                    </Button>
                </div>
            ) : (
                <div className="search_buttons">
                    <Button 
                        className="search_buttonHidden"
                        type="submit" 
                        onClick={searchdata} 
                        variant="outlined">Google Search
                    </Button>
                    <Button 
                        className="search_buttonHidden"
                        variant="outlined">I'm Feeling Lucky
                    </Button>
                </div>
            )} 
        </form>
    )
}

export default Search
