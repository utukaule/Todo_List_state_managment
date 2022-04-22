export const TodoItem = ({ todo }) => {
    return (
        <div>
            {/* <div>{todo.id}</div> */}
            <div>{todo.title}:- {todo.status ? "Done" : "Not Done"}
                <button onClick={}>Toggle</button>
            </div>
            )
        </div>
    )
}