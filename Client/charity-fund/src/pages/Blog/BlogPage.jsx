import React, {useState} from 'react';
import "./Components/BlogContent.css"
import CircularProgress from '@mui/material/CircularProgress';
import TwitterContainer from "./Components/TwitterContainer"


 function BlogPage () {

    const [isLoading, setIsLoading] = useState(true)
      

        return(
            <div className='blogPage'>
                
                {/* {isLoading && <CircularProgress className="preloader"/>} */}

                {/* <h1 className="HeaderBlog" style={{margin: "8% auto"}}>Статті</h1>  */}
                    <TwitterContainer/>

            </div>
        );
            }
      
export default BlogPage;


