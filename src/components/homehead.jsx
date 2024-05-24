import React from "react";

function HomeHead(props) {
  const addTodo = () => {
    console.log("I am clicked");
  }

  return (
    <div className="flex h-screen">
      <div className="item-center justify-between ml-3 w-1/2">
        <p className="text-6xl my-10 ml-3">Hello, {props.name} </p>
      </div>
      <div className="border-2 border-black w-1/2">
          <div className="flex justify-between items-center m-8">
            <h1 className="text-3xl font-bold text-center">To-Do List</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={addTodo}
            >
              Add Todo
            </button>
          </div>
      </div>
    </div>
  );
}

export default HomeHead;
