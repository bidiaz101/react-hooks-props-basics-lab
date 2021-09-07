import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      { props.bio ? <p>{ props.bio }</p> : null }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <a href={ props.links.github }>Github</a>
      <a href={ props.links.linkedin }>LinkedIn</a>
    </div>
  );
}

export default About;
