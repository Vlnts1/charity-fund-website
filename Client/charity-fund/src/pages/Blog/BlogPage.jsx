import React from 'react';
import "./Components/BlogContent.css"
import TwitterContainer from "./Components/TwitterContainer"


 function BlogPage () {

        return(
            <div className='blogPage'>
                
                {/* {isLoading && <CircularProgress className="preloader"/>} */}

                {/* <h1 className="HeaderBlog" style={{margin: "8% auto"}}>Статті</h1>  */}
                    <TwitterContainer/>

            </div>
        );
            }
      
export default BlogPage;


