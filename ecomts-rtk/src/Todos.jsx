import { useDispatch } from "react-redux"
import { useAppSelector } from "./redux/store";
import { Button } from "react-bootstrap";
import { fetchTodos } from "./redux/api/fetchTodos";

 

export default function Todos() {
 let dispatch = useDispatch();
 const {status, list, error} = useAppSelector(state => state.todos);

  return (
    <div>
         <Button onClick={() => dispatch(fetchTodos())}>Get Todos</Button>
         {
            status === "loading" ? "Loading todos...": (<div>
                {
                    list.map(todo => <p key={todo.id}> {todo.title}, {todo.completed}</p>)
                }    
            
            </div>)
         }
    </div>
  )
}
