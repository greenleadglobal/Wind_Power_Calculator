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

  const openInfoWindow = () => {
    const infoWindow = window.open('', '_blank', `width=${screen.width},height=${screen.height},scrollbars=yes,resizable=yes`);

    infoWindow.document.write(`
      <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wind Turbine Information</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      background-color: #e8f5e9;
      color: #1b5e20;
      margin: 0;
      padding: 0;
    }

    h2 {
      font-size: 24px;
      color: #388e3c;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 20px;
      color: #2e7d32;
    }

    ul {
      list-style-type: none;
      padding-left: 20px;
    }

    li {
      font-size: 16px;
      line-height: 1.6;
    }

    p {
      font-size: 16px;
      color: #388e3c;
      margin: 10px 0;
    }

    p.subtext {
      font-size: 14px;
      color: #4caf50;
    }

    .container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .header {
      text-align: center;
      margin-bottom: 30px;
    }

    .header h1 {
      font-size: 32px;
      color: #388e3c;
    }

    .content {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Wind Turbine Information</h1>
    </div>
    <div class="content">
      <h2>Input Parameters</h2>
      <ul>
        <li>Blade length (L): between 20m and 80m</li>
        <li>Wind speed (v): 0 to 75 mph (cuts out below 8 and above 55 mph)</li>
        <li>Altitude (z): 0 to 10,000m</li>
        <li>Tower height (h): 20 to 200m</li>
      </ul>

      <h2>Output</h2>
      <ul>
        <li>Kilowatts produced</li>
        <li>Homes served (optional)</li>
      </ul>

      <h2>Formulas</h2>

      <h3>Power</h3>
      <p>P = (ρ * A * v³) / 2</p>
      <ul>
        <li>ρ - Air density</li>
        <li>A - Blade sweep area</li>
        <li>v - Wind speed</li>
      </ul>

      <h3>Air Density</h3>
      <p>ρ = p / (R * T)</p>
      <ul>
        <li>p - Air pressure</li>
        <li>R - Air gas constant (287 J/kgK)</li>
        <li>T - Temperature at altitude</li>
      </ul>

      <h3>Blade Sweep Area</h3>
      <p>S = π * L²</p>
      <ul>
        <li>L - Blade length</li>
      </ul>

      <h3>Air Pressure</h3>
      <p>P = P<sub>s</sub> * (T / T<sub>s</sub>)<sup>-5.25</sup></p>
      <ul>
        <li>P<sub>s</sub> - Pressure at sea level (101,300 Pa)</li>
        <li>T<sub>s</sub> - Temperature at sea level (293 K or 20°C)</li>
        <li>T - Temperature at altitude</li>
        <li><strong>Constant exponent:</strong> <i>g / (αR) = -5.25</i></li>
        <li>g - Gravitational acceleration (9.8 m/s²)</li>
        <li>R - Air gas constant (287 J/kgK)</li>
        <li>α - Atmospheric lapse rate (0.0065 K/m)</li>
      </ul>

      <h3>Temperature at Altitude</h3>
      <p>T = T<sub>s</sub> - αz</p>
      <ul>
        <li>T<sub>s</sub> - Temperature at sea level (293 K or 20°C)</li>
        <li>α - Atmospheric lapse rate (0.0065 K/m)</li>
        <li>z - Altitude (0 to 10,000 m)</li>
      </ul>

      <h3>Wind Speed at Tower Height</h3>
      <p>v<sub>w</sub> = v<sub>r</sub> * (h / h<sub>r</sub>)<sup>α</sup></p>
      <ul>
        <li>v<sub>r</sub> - Wind velocity at reference height</li>
        <li>v<sub>w</sub> - Wind velocity with wind shear effect</li>
        <li>h - Height of turbine (20 to 200m)</li>
        <li>h<sub>r</sub> - Reference height (10m)</li>
        <li>α - Hellman exponent (0.3)</li>
      </ul>
    </div>
  </div>
</body>
</html>
    `);
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
      <div className='explore'><button onClick={openInfoWindow} style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background 0.3s ease-in-out',fontSize: '15px',fontWeight: 'bold'}} onMouseOver={(e) => e.target.style.backgroundColor = 'green'} onMouseOut={(e) => e.target.style.backgroundColor = 'red'}>Explore More</button></div>
    </div>
  );
};

export default TurbineCalculator;
