export default function Task(props) {
  return (
    <div className={props.complete ? "task-complete" : null}>
      <p>{props.taskText}</p>
      <button onClick={() => props.markComplete(props.taskId)}>Complete</button>
      <button onClick={() => props.removeItem(props.taskId)}>Delete</button>
    </div>
  );
}
