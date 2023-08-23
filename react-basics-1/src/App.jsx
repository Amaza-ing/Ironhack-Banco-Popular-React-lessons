import "./App.css";
import Navbar from "./components/Navbar";
import Country from "./components/Country";
import Countries from "./components/Countries";

import landscape from "./assets/landscape.jpg";
import ReactPlayer from "react-player";

const text = "Hello World!";

const person = {
  name: "Adrián",
  city: "Málaga",
};

const h1Id = "h1-id";

const USAPopulation = 300000000000;

const spainInfo = {
  area: 10,
  language: "Spanish",
};
const PRInfo = {
  area: 20,
  language: "Spanish & English",
};
const USAInfo = {
  area: 30,
  language: "English",
};

const sum = (n1, n2) => n1 + n2;

function App() {
  return (
    <>
      <Navbar />

      <h1 id={h1Id}>Hi!</h1>
      <h2>{text}</h2>
      <p>
        My name is {person.name} & I live in {person.city}
      </p>
      <p>2 + 3 = {sum(2, 3)}</p>
      <img src={landscape} alt="landscape" />

      <Countries>
        <Country
          country="Spain"
          population="100000000"
          info={spainInfo}
        ></Country>
        <hr />
        <Country
          country="Puerto Rico"
          population="2000000000"
          info={PRInfo}
        ></Country>
        <hr />
        <Country
          country="USA"
          population={USAPopulation}
          info={USAInfo}
        ></Country>
        <hr />
      </Countries>

      <ReactPlayer url="https://www.youtube.com/watch?v=tP8JiVUiyDo&t=1s" />
    </>
  );
}

export default App;
