import React, { useState } from 'react';
import { Typography, Container, TextField } from '@material-ui/core';

function Example(props) {

  const [newTitle, setNewTitle] = useState(props.title);
  const [deploy, setDeploy] = useState(false);

  const handleOnChange = (e) => {
      setNewTitle(e.target.value);
    };

  const handleFocus = () => {
    setDeploy(true);
  };

  return (
    <Container>
      { deploy ?
        <TextField
          autoFocus
          onChange= {handleOnChange}
          value= {newTitle}
          fullWidth
          onBlur = {handleFocus}
        /> :
        <Typography
            onClick={() => setDeploy(!deploy)}
            style= {{ color: 'black' }}
            >{props.title}
        </Typography>
      }
    </Container>
  );
};

export default Example;
