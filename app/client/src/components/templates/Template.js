import React, { useState } from 'react';
import { Card, Container } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import Example from './cardTemplates';
import Tasks from '../tasks/cardTasks';
import Form from '../tasks/formTasks';

const descriptions = ['To do', 'in process', 'check'];

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

function Templates() {
  const classes = useStyles();
  return (
    <Container className= {classes.container}>
      <Card className= {classes.root}>
        <Example description= {descriptions[0]}/>
        <Tasks/>
        <Tasks/>
        <Form/>

      </Card>
      <Card className= {classes.root}>
        <Example description= {descriptions[1]}/>
      </Card>
      <Card className= {classes.root}>
        <Example description= {descriptions[2]}/>
      </Card>
    </Container>
  );
};

export default Templates;
