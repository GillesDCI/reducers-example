export default function Todo({ item, onFinishClicked, onDeleteClicked }){



    return (
    <>
      <div className="todo-item">
        <p><b>Todo Item:</b> {item.text} </p>
        <p><b>Created On:</b> {new Date(item.createdOn).toLocaleString()}</p>
        <p><b>Status:</b> {item.done ? 'Done!': 'In Progress...'}</p>


        <button onClick={() => onFinishClicked(item)}>I finished this task</button>
         &nbsp;
        <button onClick={() => onDeleteClicked(item)}>Delete this task!</button>

      </div>
    </>
    )
}
  