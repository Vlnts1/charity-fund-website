import React, {useState,useEffect} from 'react';
import "./Components/BlogContent.css"
import TwitterContainer from "./Components/TwitterContainer"
import CircularProgress from '@mui/material/CircularProgress';


 function BlogPage () {
        const [isLoading, setLoading] = useState(false);

        useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
        }, [])
            return(
                <div className='blogPage'> 
                    {isLoading? (
                        <CircularProgress isLoading={isLoading}
                        style={{position: 'fixed',top: '50%',left: '50%'}}/>
                        ) : (
                        <TwitterContainer/>
                    )}
                </div>
            );
    }
      
export default BlogPage;


