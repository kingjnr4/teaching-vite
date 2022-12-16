import './styles/greetings.css';
function Greeting(props) {
  return (
    <>
      <p id="name">
        Hello {props.name}you are {props.age} years old
      </p>
      <p className="time">Good {props.time}</p>
    </>
  );
}

export default Greeting;
