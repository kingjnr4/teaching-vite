import './styles/greetings.css'
function Greeting() {
  const name = 'faloke';
  const time = 'evening';
  return (
    <>
      <p id="name">Hello {name}</p>
      <p className="time">Good {time}</p>
    </>
  );
}

export default Greeting;
