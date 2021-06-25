import React, { useState } from 'react';
import Example from './cardTemplates';
import Container from './TemplateContainers';

const descriptions = ['To do', 'in process', 'check'];

function Templates() {

  return (
    <div>
      <Example description= {descriptions[0]}/>
      <Example description= {descriptions[1]}/>
      <Example description= {descriptions[2]}/>
    </div>
  );
};

// <Example
// description= {description}
// setDescription= {setDescription}
// title = {description}
// />
// <button>
// { true ? '+ Card' : '+ List'}
// </button>

export default Templates;
