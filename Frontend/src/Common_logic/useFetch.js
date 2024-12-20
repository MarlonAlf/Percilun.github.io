
// NOT IN USE IN THE REACT FLASK VERSION OF THE WEB, I BASED THE ADAPTAION OF useFetchAwait FOR LEARNING PURPUSES OF await fetching data etc.


import { useEffect, useState } from "react";
import useFetchAwait from "./useFetchAwait"

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); 
    const [error, setError] = useState(null);
        // console.log('usefetch url', url)

        useEffect(() => {   
            setTimeout(() => {
                fetch(url) 
                    .then(res => {
                        if(!res.ok){
                            throw Error('! Error with the data received !');
                        }
                        return res.json();
                    })
                    .then(data => {
                        setData(data);
                        // console.log('data en fetch', data); 
                        setIsPending(false);
                        setError(null); // this line eliminates the error message when this part of the page automatically reloads
                    })
                    .catch(err => {
                        setIsPending(false);
                        setError(err.message);
                    })
            });
        }, [url]);
        return { data, isPending, error};
}
export default useFetch;