import React, { useEffect,useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import "./TwitterContainer.css"

const TwitterContainer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  const { isLoading } = useState();

  return (
    
    <section className="twitterContainer">
      <div className="twitter-embed" >
      <h1 className="HeaderBlog" style={{margin: "8% auto"}}>Блог</h1> 
        <a
          className="twitter-timeline"
          data-theme="light"
          data-tweet-limit="5"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/fillpackart?s=21&t=d5wINaCBcLs6KEcNUclTfA"
        >
          Tweets by @TwitterDev

          {isLoading && <CircularProgress className="preloader"/>}
        </a>
      </div>
    </section>
  );
};

export default TwitterContainer;