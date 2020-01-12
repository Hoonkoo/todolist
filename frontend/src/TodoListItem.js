import React from 'react';

import { MdDelete, MdCheckBoxOutlineBlank , MdCheckBox} from 'react-icons/md'

const TodoListItem = ({ todo }) => {
    return (
      <div className="TodoListItem">
        <div className="card">
          {todo.isChecked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
          {todo.text}
          {todo.date}<MdDelete/>
        </div>
      </div>
    );
};

export default TodoListItem;