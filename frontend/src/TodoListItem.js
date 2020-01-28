import React from 'react';

import { MdDelete, MdCheckBoxOutlineBlank , MdCheckBox} from 'react-icons/md'

const TodoListItem = ({ todo, onRemove, onToggle }) => {

    return (
      <div className="TodoListItem">
        <div className="card">
          <div className="checkbox" onClick={() => onToggle(todo.id)}>
            {todo.isChecked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
          </div>
          <p>
            {todo.text}
          </p>
          {todo.date}
          <span className="remove" onClick={() => onRemove(todo.id)}><MdDelete/></span>
        </div>
      </div>
    );
};

export default TodoListItem;