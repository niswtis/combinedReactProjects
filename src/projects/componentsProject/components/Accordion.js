import { useState } from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(-1)

    const clickHandler = (nextIndex) => {
        setExpandedIndex((currentExpandedIndex) => {
          if (currentExpandedIndex === nextIndex) {
            return -1;
          } else {
            return nextIndex;
          }
        });
      };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex
        return (
            <div key={index}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" 
                key={index} onClick={() => clickHandler(index)} style={{display: "flex", alignItems: "center"}}>
                    {item.label}
                    <BsArrowLeftCircleFill className="text-2xl" style={isExpanded && {transform: "rotate(-90deg)"}}/>
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })

    
    return (
        <div>
            Accordion
            {renderedItems}
        </div>
    );
  }
  
  export default Accordion;
   