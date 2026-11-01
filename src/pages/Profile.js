import EditForm from "./EditForm";
export default function Profile(props) {
  return (
    <>
      <p>Your name: {props.name}</p>
      <EditForm name={props.name} />
    </>
  );
}
