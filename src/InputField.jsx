// import React from "react";
// import {convert} from './turbine.jsx';
// import "./InputField.css";

// function units(type, system) {
//   if(type === "length") {
//     if(system === "metric") {
//       return "m";
//     } else if(system === "us"){
//       return "ft";
//     }
//   } else if(type === "speed"){
//     if(system === "metric") {
//       return "m/s";
//     } else if(system === "us"){
//       return "mph";
//     }
//   }
//   return "";
// }

// function InputField(props){
//   let value = props.system === "us" ? convert(props.value, props.unit, props.system) : props.value;

//   return (
//     <label htmlFor={props.name} className="input-field">
//       <p className="slider-text">
//         <span className="label">{props.label} </span> 
//         <span className="value">{value}<span className="unit"> {units(props.unit, props.system)}</span></span>
//       </p>
//       <input id={props.name} name={props.name} type="range" {...props} />
//     </label>
//   );
// }

// export default InputField;






// import React from "react";
// import { convert } from "./turbine.jsx";
// import "./InputField.css";

// function units(type, system) {
//   if (type === "length") {
//     return system === "metric" ? "m" : "ft";
//   } else if (type === "speed") {
//     return system === "metric" ? "m/s" : "mph";
//   }
//   return "";
// }

// function InputField(props) {
//   const value =
//     props.system === "us" ? convert(props.value, props.unit, props.system) : props.value;

//   return (
//     <label htmlFor={props.name} className="input-field">
//       <p className="slider-text">
//         <span className="label">{props.label} </span>
//         <span className="value">
//           {value}
//           <span className="unit"> {units(props.unit, props.system)}</span>
//         </span>
//       </p>
//       <input id={props.name} name={props.name} type="range" {...props} />
//     </label>
//   );
// }

// export default InputField;


import React from "react";
import {convert} from './turbine.jsx';
import "./InputField.css";

function units(type, system) {
  if(type === "length") {
    if(system === "metric") {
      return "m";
    } else if(system === "us"){
      return "ft";
    }
  } else if(type === "speed"){
    if(system === "metric") {
      return "m/s";
    } else if(system === "us"){
      return "mph";
    }
  }
  return "";
}

function InputField(props){
  let value = props.system === "us" ? convert(props.value, props.unit, props.system) : props.value;

  return (
    <label htmlFor={props.name} className="input-field">
      <p className="slider-text">
        <span className="label">{props.label} </span> 
        <span className="value">{value}<span className="unit"> {units(props.unit, props.system)}</span></span>
      </p>
      <input id={props.name} name={props.name} type="range" {...props} />
    </label>
  );
}

export default InputField;