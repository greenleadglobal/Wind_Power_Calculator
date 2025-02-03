import React from "react";
import "./SelectInput.css";

const SelectInput = ({ name, label, value, options, onChange }) => {
  return (
    <div className="select-input">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;


// import React from "react";
// import "./SelectInput.css";

// const SelectInput = ({ name, label, value, onChange, options }) => {
//     return (
//         <div className="select-input">
//             <label htmlFor={name}>{label}
//                 <select id={name} name={name} value={value} onChange={onChange}>
//                     {options.map((option, index) => (
//                         <option key={index} value={option.value}>{option.label}</option>
//                     ))}
//                 </select>
//             </label>
//         </div>
//     );
// };

// export default SelectInput;
