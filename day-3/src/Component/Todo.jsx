import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const[alltodo, setAlltodo]=useState([]);
  const [editIndex, setEditIndex] = useState(null); // to track which todo is being edited

  function handlechange(event) {
    setTodo(event.target.value);
    // console.log(event.target.value)
  }
function handlesubmit() {
  if (todo.trim() === "") return;

  if (editIndex === null) {
    // Add new todo
    setAlltodo([...alltodo, todo]);
  } else {
    // Edit existing todo
    const updatedTodos = [...alltodo];
    updatedTodos[editIndex] = todo;
    setAlltodo(updatedTodos);
    setEditIndex(null); // exit edit mode
  }

  setTodo(""); // clear input
}

  function detele(index){
    const newarray= [...alltodo];
    newarray.splice(index,1);
    setAlltodo(newarray);

  }
  function editTodo(index) {
  setTodo(alltodo[index]);  // Put selected todo back in input
  setEditIndex(index);      // Set index to edit mode
}

  return (
    <div 
    style={{
      maxWidth: '300px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>hello</h1>

      <label>Todo</label>
      <br />
      <input
      style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '14px'
        }}
        onChange={handlechange}
        value={todo}
        placeholder=" enter your todo list"
      />
      <br />
      
      <input 
               style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      onClick={handlesubmit} type="Submit" value={editIndex !== null ? "Update" : "Add"} />
      {alltodo.map((todo ,i)=>(
        <div>
        <h1 key={i}>{i+1}.{todo}</h1>
      <button onClick={()=>detele(i)}>detele</button>
      <button onClick={() => editTodo(i)}>Edit</button>

      </div>
      ))}
    </div>
  );
};
export default Todo;
