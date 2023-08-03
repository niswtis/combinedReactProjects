import { useState } from "react";
import AnimalShow from "./AnimalShow";

function randomAnimal() {
  const arr = ["cow", "horse", "bird", "gator", "cat", "dog"];
  return arr[Math.floor(Math.random() * arr.length)];
}

function AppAnimals() {
  const [count, setCount] = useState(0);
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
    setAnimals([...animals, randomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="flex flex-col place-content-center">
      <div className="w-full flex place-content-center">
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5"
        >
          Add Animal
        </button>
        <label className="self-center right-0 m-5">
          Animals to show: {count}
        </label>
      </div>

      <div>{renderedAnimals}</div>
    </div>
  );
}

export default AppAnimals;
