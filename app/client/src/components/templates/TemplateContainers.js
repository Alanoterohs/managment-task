import React, { useState } from 'react';
import { Container, Collapse, TextField, Button } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import Example from './cardTemplates';
import Templates from './Template';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '300px',
    margin: theme.spacing(1),
    backgroundColor: '#C2B4AF',
    color: 'white',
  },
  container: {
      display: 'flex',
    },
}));

function Containers() {
  const classes = useStyles();
  const [description, setDescription] = useState('');
  const [template, setTemplate] = useState([]);
  const [display, setDisplay] = useState(true);

  const addTemplate = () => {
        setTemplate([...template, {
            description,
          },
        ]);
      };

  const handleOnChange = (e) => {
      setDescription(e.target.value);
    };

  const handleOnSubmit = (e) => {
      e.preventDefault();
      if (description !== '') {
        addTemplate();
        setDescription('');
      } else {
        return null;
      }
    };

  return (
    <Container>
      <form onSubmit={handleOnSubmit}>
        <TextField label="Outlined" variant="outlined" size='small'
          value= {description}
          onChange={handleOnChange}
          />
      </form>
      <Container className={classes.container}>
        {template.map((todo, index) => (
          <div key={index}>
            <Templates description={todo.description}/>
          </div>
        ))}
      </Container>
    </Container>
  );
};

// <Collapse>
//   <Button in= {display}>
//     + Add Template
//   </Button>
// </Collapse>
// <Collapse in={!display}>
//   <TextField
//     value= {description}
//     />
// </Collapse>
export default Containers;
