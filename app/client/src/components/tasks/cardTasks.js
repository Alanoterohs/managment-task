import React, { useState } from 'react';
import { Card, Container, Typography } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tasks: {
    width: '300px',
    backgroundColor: '#272C34',
    color: 'white',
  },
  font: {
    margin: theme.spacing(2),
  },
}));

function Tasks({ name }) {
  const classes = useStyles();
  return (
    <Card className= {classes.tasks}>
      <Typography className= {classes.font}>
        {name}
      </Typography>
    </Card>
  );
}

export default Tasks;
