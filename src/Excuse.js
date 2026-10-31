import Axios from "axios";

export default function Excuse(props) {
  const fetchData = async () => {
    const response = await Axios.get(
      `https://excuser-three.vercel.app/v1/excuse/${props.type}`,
    );
    console.log(response);
    return response.data[0].excuse;
  };

  const updateExcuse = async () => {
    const content = await fetchData();
    props.setExcuse(content);
  };

  return <button onClick={() => updateExcuse()}>{props.type}</button>;
}
