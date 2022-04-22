import { useState } from "react";
import { TodoInput } from "./todoInput";
import { TodoItem } from "./todoItem";
import {nanid, nanoid} from "nanoid";

function Todo() {
    const [todoList, setTodoList] = useState([]);
    //when data is going to change we need state for that.
    const getData = (todo) => {
        // console.log("Received :",todo);
        const payload = {
            title: todo,
            status: false,
            id: nanoid(5),
        }
        setTodoList([...todoList, payload])
        // [...todoList,todo] <= this is spread operator
        //...todoList will copy all previous element 
        // and
        //todo will have new element which will be added in list.         
    }
    const hadleStatus = (id) => {

    };
    
    return <div>
        <TodoInput getData={getData} />
        {todoList.map((e) => (
            <TodoItem todo={e}></TodoItem>
        ))}
    </div>
}

export { Todo };