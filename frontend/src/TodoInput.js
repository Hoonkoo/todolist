import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";

const TodoInput = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);
  
  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue(""); 
      e.preventDefault();      
    },
    [value, onInsert],
  );

  return (
    <form className="TodoInput" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Write something to do"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInput;
