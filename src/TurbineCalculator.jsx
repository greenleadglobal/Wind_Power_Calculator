import React, { useState } from 'react';
import { calculateTurbinePower } from './turbine.jsx';
import InputField from "./InputField.jsx";
import SelectInput from './SelectInput.jsx';
import TurbineVisual from './TurbineVisual.jsx';
import "./TurbineCalculator.css";

const TurbineCalculator = () => {
  const [state, setState] = useState({
    windVelocity: 0,
    towerHeight: 80,
    bladeLength: 20,
    altitude: 0,
    units: "us"
  });

  const update = (event) => {
    let value;

    if (event.target.type === "range") {
      if (event.target.name === "bladeLength") {
        value = +event.target.value;
        setState(prevState => ({
          ...prevState,
          bladeLength: value,
          towerHeight: Math.max(prevState.towerHeight, value * 2)
        }));
        return;
      } else if (event.target.name === "towerHeight") {
        value = +event.target.value;
        setState(prevState => ({
          ...prevState,
          towerHeight: value,
          bladeLength: Math.min(prevState.bladeLength, value / 2)
        }));
        return;
      } else {
        value = +event.target.value;
      }
    } else if (event.target.type === "checkbox") {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    setState(prevState => ({
      ...prevState,
      [event.target.name]: value
    }));
  };

  const calculatePower = () => {
    try {
      const powerInWatts = calculateTurbinePower(state.windVelocity, state.towerHeight, state.bladeLength, state.altitude);
      return (
        <div className="results-container">
          <div className="results centered">
            <h2>{(powerInWatts / 1000).toLocaleString(undefined, { maximumFractionDigits: 0 })}<span className="unit"> kW</span></h2>
            <h3>Output from a single turbine</h3>
          </div>
        </div>
      );
    } catch (error) {
      return <p className="error">{error.message}</p>;
    }
  };

  const unitsOptions = [
    { label: 'Metric', value: 'metric' },
    { label: 'U.S.', value: 'us' }
  ];

  return (
    <div className="turbine-calculator">
      {calculatePower()}
      <div className="input-section">
        <form className="inputs" aria-label="Wind power calculator">
          <SelectInput name="units" label="Units" value={state.units} options={unitsOptions} onChange={update} />
          <InputField name="towerHeight" min="40" max="200" value={state.towerHeight} label="Tower height" unit="length" system={state.units} onChange={update} />
          <InputField name="bladeLength" min="20" max="80" value={state.bladeLength} label="Blade length" unit="length" system={state.units} onChange={update} />
          <InputField name="windVelocity" min="0" max="24.6" value={state.windVelocity} label="Wind velocity" unit="speed" step="0.2" system={state.units} onChange={update} />
          <InputField name="altitude" min="0" max="5000" value={state.altitude} label="Altitude" unit="length" step="10" system={state.units} onChange={update} />
        </form>
      </div>
      <TurbineVisual bladeLength={state.bladeLength} towerHeight={state.towerHeight} altitude={state.altitude} windVelocity={state.windVelocity} />
    </div>
  );
};

export default TurbineCalculator;
