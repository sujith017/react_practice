import axios from "axios";
import { useState } from "react";
function TodoPage(){
    const [todo, setToDO] = useState([]);
    const fetchData = async () =>{
        const data = await axios
        .get("https://jsonplaceholder.typicode.com/todos");
        setToDO(data.data);
        console.log(todo);
    }
    fetchData();
    return (
        <>
        <h1>TODO Page</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {todo.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed ? 'True' : 'False'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}


export default TodoPage