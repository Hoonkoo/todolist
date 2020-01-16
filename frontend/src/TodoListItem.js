import React from 'react';

import { MdDelete, MdCheckBoxOutlineBlank , MdCheckBox} from 'react-icons/md'

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id } = todo
    return (
      <div className="TodoListItem">
        <div className="card">
          <div class="checkbox" onClick={() => onToggle(id)}>
            {todo.isChecked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
          </div>
          {todo.text}
          <div className="remove" onClick={() => onRemove(id)}>
            {todo.date}<MdDelete/>
          </div>
        </div>
      </div>
    );
};

export default TodoListItem;