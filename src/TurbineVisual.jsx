import React from 'react';
import TurbineTower from './TurbineTower.jsx';
import Background from './Background.jsx';
import "./TurbineVisual.css";

const TurbineVisual = ({ windVelocity, altitude, towerHeight, bladeLength }) => {
  const adjustedWindVelocity = Math.min(windVelocity, 15);

  return (
    <div className="turbine-visual">
      <svg
        className="root-svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMinYMin slice"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <Background altitude={altitude} maxAltitude="5000" />

        {/* Background turbines */}
        <TurbineTower windVelocity={adjustedWindVelocity} towerHeight={70} bladeLength={20} x="-100" y="910" />
        <TurbineTower windVelocity={adjustedWindVelocity} towerHeight={70} bladeLength={20} x="240" y="850" />
        <TurbineTower windVelocity={adjustedWindVelocity} towerHeight={70} bladeLength={20} x="590" y="880" />

        {/* Main turbine */}
        <TurbineTower windVelocity={adjustedWindVelocity} towerHeight={towerHeight} bladeLength={bladeLength} x="-600" y="1000" />
      </svg>
    </div>
  );
};

export default TurbineVisual;


























// import React from 'react';
// import TurbineTower from './TurbineTower.jsx';
// import Background from './Background.jsx';
// import "./TurbineVisual.css";

// function TurbineVisual(props) {
//   const windVelocity = props.windVelocity <= 15 ? props.windVelocity : 15

//   return (
//   <div className="turbine-visual">
//     <svg className="root-svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMinYMin slice" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >      

//       <Background altitude={props.altitude} maxAltitude="5000"/>

//       {/*Background turbines*/}
//       <TurbineTower windVelocity={windVelocity} towerHeight={70} bladeLength={20} x="-100" y="910"/>
//       <TurbineTower windVelocity={windVelocity} towerHeight={70} bladeLength={20} x="240" y="850"/>
//       <TurbineTower windVelocity={windVelocity} towerHeight={70} bladeLength={20} x="590" y="880"/>

//       <TurbineTower windVelocity={windVelocity} towerHeight={props.towerHeight} bladeLength={props.bladeLength} x="-600" y="1000"/>
//     </svg>
//   </div>
//   );

// }

// export default TurbineVisual;

// import React from 'react';
// import TurbineTower from './TurbineTower.jsx';
// import Background from './Background.jsx';
// import "./TurbineVisual.css";

// function TurbineVisual(props) {
//   const windVelocity = Math.min(props.windVelocity, 15);
  
//   return (
//     <div className="turbine-visual">
//       <svg className="root-svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMinYMin slice" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        
//         <Background altitude={props.altitude} maxAltitude="5000"/>

//         {/* Background turbines now reflect the provided blade length */}
//         <TurbineTower windVelocity={windVelocity} towerHeight={70} bladeLength={props.bladeLength} x="-100" y="910"/>
//         <TurbineTower windVelocity={windVelocity} towerHeight={70} bladeLength={props.bladeLength} x="240" y="850"/>
//         <TurbineTower windVelocity={windVelocity} towerHeight={70} bladeLength={props.bladeLength} x="590" y="880"/>

//         {/* Main turbine with dynamic blade length */}
//         <TurbineTower windVelocity={windVelocity} towerHeight={props.towerHeight} bladeLength={props.bladeLength} x="-600" y="1000"/>
//       </svg>
//     </div>
//   );
// }

// export default TurbineVisual;

