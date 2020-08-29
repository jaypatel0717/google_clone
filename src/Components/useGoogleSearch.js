import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "892092139a1793e6f";

const useGoogleSearch = (term) => {
    const [data, setDate] = useState(null);
   
    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setDate(result);
            });
        }
        fetchData();

    }, [term])

    return { data };
   
};

export default useGoogleSearch;
