import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divElement = useRef()

  useEffect(() => {
    const clickHandler = (event) => {
      if(!divElement.current) return;
      if(!divElement.current.contains(event.target)) {
        setIsOpen(false)
      }
    };
    document.addEventListener('click', clickHandler, true);

    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, []);

  const valueChangeHandler = (value) => {
    setIsOpen(false);
    onChange(value);
  };

  const onSelectClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const renderedItems = options.map((option, index) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        value={option.value}
        key={index}
        onClick={() => valueChangeHandler(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divElement} className="w-48 relative">
      <div>Dropdown</div>
      <br></br>
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={onSelectClickHandler}
      >
        {value?.label || "Select an option"}
        <GoChevronDown className="text-lg" />
      </Panel>

      {isOpen && <Panel className="absolute top-full">{renderedItems}</Panel>}
    </div>
  );
}

export default Dropdown;
