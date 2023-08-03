import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
    const dropdownOptions = [
        {label:'ketchup', value:'ketchup'},
        {label:'mayo', value:'mayo'},
        {label:'mustard', value:'mustard'}
      ]
    
      const [value, setValue] = useState(null);
      const selectValueChangeHandler = (value) => {
        setValue(value)
      }

    return (
        <div className="flex">
            <Dropdown value={value} options={dropdownOptions} onChange={selectValueChangeHandler}/>
        </div>
    );
}

export default DropdownPage;
