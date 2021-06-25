import React, { useState } from 'react';
//import Tasks from './cardTasks';

function Tasks() {
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
    <div>
      <form onSubmit = {handleOnSubmit}>
      <input
      type="text"
      placeholder="Add a new todo"
      value= {description}
      onChange= {handleOnChange}
      />
      <button >Add</button>
      </form>
        <br></br>
      <div>
          {task.map((todo, index) => (
            <div key={index}>
              <span> {todo.description} </span>
            </div>
          ))}
      </div>
    </div>
  );
};


export default Tasks;
