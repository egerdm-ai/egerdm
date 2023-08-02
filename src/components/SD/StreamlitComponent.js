import React from 'react';

const StreamlitComponent = () => {
  return (
    <iframe
      title = 'streamlit_sd'
      src="https://cemerator.streamlit.app/?embed=true" // Replace with your Streamlit app's URL
      frameborder="0"
      width="100%"
      height="2800px"
      style={{pointerEvents: "auto"}}  // Enable pointer events
    ></iframe>
  );
};

export default StreamlitComponent;
