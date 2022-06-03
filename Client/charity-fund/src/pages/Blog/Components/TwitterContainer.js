import React, { useEffect } from "react";
import "./TwitterContainer.css"

const TwitterContainer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);


  return (
    
    <section className="twitterContainer">
      <div className="twitter-embed" >
      <h1 className="HeaderBlog" style={{margin: "8% auto"}}>Блог</h1> 
        <a
          className="twitter-timeline"
          data-theme="light"
          data-tweet-limit="5"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/caritative_kiev?s=11&t=mulM3xBKVmQRYMV0ThbUUw"
        >
        </a>
      </div>
    </section>
  );
};

export default TwitterContainer;