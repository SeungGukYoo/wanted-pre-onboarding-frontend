import React from "react";

const List = () => {
  return (
    <div>
      <div>
        <input type="text" className="border border-black" />
        <button>ADD</button>
      </div>
      <ul className="">
        <li className="flex">
          <input type="checkbox" name="" id="" />
          <p>todo1</p>
          <button>수정</button>
          <button>삭제</button>
        </li>
        <li>
          <input type="checkbox" name="" id="" />
          <p>todo1</p>
          <button>수정</button>
          <button>삭제</button>
        </li>
      </ul>
    </div>
  );
};

export default List;
