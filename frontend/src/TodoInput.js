import React from 'react';
import { MdAdd } from "react-icons/md";

const TodoInput = () => {
    return (
      <form className="TodoInput">
        <input type="text" placeholder="Write something to do" />
        <button type="submit"><MdAdd/></button>
      </form>
    );
};

export default TodoInput;