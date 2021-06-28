import React, { useState } from 'react';
import { Card, Container, TextField, Button, } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import Tasks from './cardTasks';

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: 'white',
    margin: theme.spacing(1),
  },
}));

function Form() {
  const classes = useStyles();
  const [description, setDescription] = useState('');
  const [task, setTask] = useState([]);

  const addTodo = () => {
        setTask([...task, {
            description,
          },
        ]);
      };

  const handleOnChange = (e) => {
      setDescription(e.target.value)
    };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (description !== '') {
      addTodo();
      setDescription('')
      }
      return null;
    };

  return (
    <Container>
      <form onSubmit = {handleOnSubmit}>
    <TextField
      className={classes.input} id="outlined-basic" label="Outlined" variant="outlined"
      value= {description}
      onChange= {handleOnChange}
      placeholder="Add a new task"/>
      </form>
        <br></br>
      <div>
          {task.map((todo, index) => (
            <div key={index}>
              <span> {todo.description} </span>
              <Tasks/>
            </div>
          ))}
      </div>
    </Container>
  );
};


export default Form;
