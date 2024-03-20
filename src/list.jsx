import React, { useState } from "react";

export default function List() {
  const [list, Setlist] = useState(["apple", "mango", "coconut"]);

  function addList() {
    let input = document.querySelector(".inputList").value;
    document.querySelector(".inputList").value = "";

    if (input.trim() !== "") {
      Setlist((l) => [...l, input]);
    }
  }

  function removeBtn(index) {
    const updateList = list.filter((_, i) => i !== index);
    Setlist(updateList);
  }

  return (
    <div className="main">
      <input type="text" className="inputList" placeholder="Enter..." />
      <button onClick={addList} className="addBtn">
        Click
      </button>
      <ul className="ulList">
        {list.map((element, index) => (
          <li key={index}>
            <span className="textList">{element}</span>
            <button className="deleteBtn" onClick={() => removeBtn(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
