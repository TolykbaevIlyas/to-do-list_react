import React, { useState } from "react";

export default function List() {

  const [list, setList] = useState(["apple", "mango", "coconut"]);
  const [word, setWord] = useState('');

  function addList() {
    if (word.trim() !== "") {
      setList([...list, word])
      setWord('');
    }
  }

  function removeBtn(index) {
    const updateList = list.filter((_, i) => i !== index);
    setList(updateList);
  }

  return (
    <div className="main">
      <input type="text" className="inputList" placeholder="Enter..." value={word} onChange={(e)=>setWord(e.target.value)}/>
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
