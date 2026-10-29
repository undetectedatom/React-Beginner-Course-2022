export default function Task(props) {
  return (
    <div>
      <p>{props.taskText}</p>
      <button onClick={() => props.markComplete()}>Complete</button>
      <button onClick={() => props.removeItem(props.taskId)}>Delete</button>
    </div>
  );
}
