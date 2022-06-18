import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleClick(e) {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setIsExpanded(false);
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
          onChange={handleChange}
          onClick={expand}
        />
        {isExpanded && (
          <button onClick={handleClick}>
            <FaPlus />
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
