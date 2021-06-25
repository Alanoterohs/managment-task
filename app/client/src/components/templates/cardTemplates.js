import React, { useState } from 'react';

function Example(props) {

  const [deploy, setDeploy] = useState(false);

  return (
    <div>
        <div>
        <span>{props.description}</span>
        </div>
    </div>
  );
}
// onBlur = {() => setDeploy(!deploy)}
// <input
//   value= {props.title}
//   onClick = {() => setDeploy(!deploy)}
//   />

export default Example;
