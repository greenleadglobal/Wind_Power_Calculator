import React from 'react';
import TurbineBlades from './TurbineBlades.jsx';
import './TurbineTower.css';

const TurbineTower = ({ towerHeight, windVelocity, bladeLength, x, y, width, height }) => {
  // Converts tower height from meters into screen units
  const scaledTowerHeight = (350 * towerHeight) / 200;
  const bladeYOffset = 350 - scaledTowerHeight - 600;
  const towerHeightScale = 0.6 * (scaledTowerHeight / 350) + 0.4;

  return (
    <svg
      className="turbine-tower"
      viewBox="-15 0 30 500"
      preserveAspectRatio="xMidYMax meet"
      overflow="visible"
      x={x}
      y={y}
      width={width}
      height={height}
    >
      <g className="tower">
        <polygon
          className="tower"
          points={`${towerHeightScale * 14},0 -${towerHeightScale * 14},0 -${towerHeightScale * 5},-${scaledTowerHeight} ${towerHeightScale * 5},-${scaledTowerHeight}`}
        />
        <polygon
          className="tower-shadow"
          points={`-1.5,0 -${towerHeightScale * 14},0 -${towerHeightScale * 5},-${scaledTowerHeight} -1,-${scaledTowerHeight}`}
        />
      </g>
      <TurbineBlades windVelocity={windVelocity} bladeLength={bladeLength} x="-100" y={bladeYOffset} width="200" />
    </svg>
  );
};

export default TurbineTower;



// import React from 'react';
// import TurbineBlades from './TurbineBlades.jsx';
// import './TurbineTower.css';

// class TurbineTower extends React.Component {
//     render() {
//         //Converts tower height from meters into screen units
//         const towerHeight = 350 * this.props.towerHeight / 200;
//         const bladeYOffset = 350 - towerHeight - 600;
//         const towerHeightScale = 0.6 * towerHeight / 350 + 0.4;

//         return (
//             <svg className="turbine-tower" viewBox="-15 0 30 500" preserveAspectRatio="xMidYMax meet" overflow="visible" x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height}>
//               <g className="tower" >
//                 <polygon className="tower" points={`${towerHeightScale * 14},0 -${towerHeightScale * 14},0 -${towerHeightScale * 5},-${towerHeight} ${towerHeightScale * 5},-${towerHeight}`}/>
//                 <polygon className="tower-shadow" points={`-1.5,0 -${towerHeightScale * 14},0 -${towerHeightScale * 5},-${towerHeight} -1,-${towerHeight}`}/>
//               </g>
//               <TurbineBlades 
//                 windVelocity={this.props.windVelocity} bladeLength={this.props.bladeLength}  x="-100" y={bladeYOffset} 
//                 width="200"
//               />
//             </svg>
//         );
//     }
// }

// export default TurbineTower;






























// import React from 'react';
// import TurbineBlades from './TurbineBlades.jsx';
// import './TurbineTower.css';

// class TurbineTower extends React.Component {
//     render() {
//         //Converts tower height from meters into screen units
//         const towerHeight = 350 * this.props.towerHeight / 200;
//         const bladeYOffset = 350 - towerHeight - 600;
//         const towerHeightScale = 0.6 * towerHeight / 350 + 0.4;

//         return (
//             <svg className="turbine-tower" viewBox="-15 0 30 500" preserveAspectRatio="xMidYMax meet" overflow="visible" x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height}>
//               <g className="tower" >
//                 <polygon className="tower" points={`${towerHeightScale * 14},0 -${towerHeightScale * 14},0 -${towerHeightScale * 5},-${towerHeight} ${towerHeightScale * 5},-${towerHeight}`}/>
//                 <polygon className="tower-shadow" points={`-1.5,0 -${towerHeightScale * 14},0 -${towerHeightScale * 5},-${towerHeight} -1,-${towerHeight}`}/>
//               </g>
//               <TurbineBlades 
              
//                 windVelocity={this.props.windVelocity} bladeLength={this.props.bladeLength}  x="-100" y={bladeYOffset} 
//                 width="200"
                
//               />
//             </svg>
//         );
//     }
// }

// export default TurbineTower;



// import React from "react";
// import TurbineBlades from "./TurbineBlades.jsx";
// import "./TurbineTower.css";

// const TurbineTower = ({ windVelocity, towerHeight, bladeLength, x, y, width, height }) => {
//     // Converts tower height from meters into screen units
//     const towerHeightScaled = (350 * towerHeight) / 200;
//     const bladeYOffset = 350 - towerHeightScaled - 600;
//     const towerHeightScale = 0.6 * (towerHeightScaled / 350) + 0.4;

//     return (
//         <svg className="turbine-tower" viewBox="-15 0 30 500" preserveAspectRatio="xMidYMax meet" x={x} y={y} width={width} height={height}>
//             <g className="tower">
//                 <polygon className="tower" points={`${towerHeightScale * 14},0 -${towerHeightScale * 14},0 -${towerHeightScale * 5},-${towerHeightScaled} ${towerHeightScale * 5},-${towerHeightScaled}`} />
//                 <polygon className="tower-shadow" points={`-1.5,0 -${towerHeightScale * 14},0 -${towerHeightScale * 5},-${towerHeightScaled} -1,-${towerHeightScaled}`} />
//             </g>
//             <TurbineBlades windVelocity={windVelocity} bladeLength={bladeLength} x="-100" y={bladeYOffset} width="200" />
//         </svg>
//     );
// };

// export default TurbineTower;
