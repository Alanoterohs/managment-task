import React, { useState, useEffect, Fragment } from 'react';
import CardProject from './cardProjects';

function Projects() {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  const setAuth = boolean => {
    setClick(boolean);
  };

  return (
    <div>
      { click ? <CardProject setClick={setAuth}/> : <NewProject setClick={setAuth}/>}
    </div>
  );
}

// {projects.map((item, index) => (
//   <span key={index}>{item.project}</span>
// ))}

function NewProject(props) {
  return (
    <div>
    <button onClick= {() => props.setClick(true)}> new project + </button>
    </div>
  );
};



export default Projects;
