import React, { useState } from 'react';
import { Typography, Container, TextField } from '@material-ui/core';
import Tasks from '../tasks/cardTasks';
function Example(props) {

  const [deploy, setDeploy] = useState(false);

  const handleFocus = () => {
    setDeploy(true);
  };

  return (
    <Container>
      { deploy ?
        <TextField
          autoFocus
          value= {props.title}
          fullWidth
          onBlur = {handleFocus}
        /> :
        <Typography
            onClick={() => setDeploy(!deploy)}
            style= {{ color: 'white' }}
            >{props.description}
        </Typography>
      }
    </Container>
  );
};

export default Example;
