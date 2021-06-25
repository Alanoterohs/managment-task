import React, { useState } from 'react';

const examples = [{
  id: 1,
  name: 'University',
  tasks: ['study', 'read'],
},
];

function Container() {
  const [template, setTemplate] = useState(examples);


  console.log(template);
  return (
    <div>
      <div>
        {template.map(item => (
          <div>
            <div>{ item.name }</div>
            <div>{ item.tasks }</div>
          </div>
        ))}
      </div>
      <div>

      </div>
    </div>
  );
}


export default Container;
