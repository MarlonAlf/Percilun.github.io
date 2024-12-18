import { useEffect, useState } from "react";

const useFetchAwait = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {      
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    console.log(response)
                    if(!response.ok) {
                        throw new Error (" ! ----- Error receiving data ----- !")
                    }else{
                        
                        const data = await response.json(); 
                        setError(null);
                        setIsLoading(false);
                        setData(data.products);
                        console.log("data in fetch", data);
                    }   
                }catch(error){
                    console.error(error);
                    setIsLoading(false);
                    setError(error.message);
                }finally{  
                    console.log('finally');
                }      
                
            }
            
        fetchData();
    }, 1000);           
        }, [url]);
 
    return {data, isLoading, error};
    }
export default useFetchAwait;