export default function Task({ taskId, taskText, isComplete, onToggleComplete, onDelete }) {
  return (
    <div className={isComplete ? "task-complete" : null}>
      <p>{taskText}</p>
      <button onClick={() => onToggleComplete(taskId)}>Complete</button>
      <button onClick={() => onDelete(taskId)}>Delete</button>
    </div>
  );
}
