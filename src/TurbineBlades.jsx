// import React from 'react';
// import ReactAnimationFrame from 'react-animation-frame';
// import './TurbineBlades.css';

// class TurbineBlades extends React.Component {

//     constructor(props) {
//       super(props);

//       //Makes different turbines look less regular
//       const angleOffset = Math.random() * 120;

//       this.state = {
//         angle: 0 + angleOffset
//       }
//     }

//     onAnimationFrame(time) {
//         const windVelocity = this.props.windVelocity > 3 ? (this.props.windVelocity - 3) / 12 : 0;

//         // const speed = Math.abs(this.props.speed) > 1 ? 1 : Math.abs(this.props.speed);

//         this.setState({
//           angle:  (this.state.angle + windVelocity * 6) % 360
//         })

//         this.blades.style.transform = `rotate(${this.state.angle}deg)`;

//     }
 
//     render() {
//         const bladeLength = 350 * this.props.bladeLength / 200;

//         const bladeWidthScale = 0.6 * bladeLength / 175 + 0.4;
//         const scale = bladeLength / 175;

//         return (
//             <svg className="turbine-blades" viewBox="-100 -100 200 200" preserveAspectRatio="xMaxYMid meet" overflow="visible" x={this.props.x} y={this.props.y} width={this.props.width}>
//               <defs>
//                 <symbol  id="Blade" viewBox="-7.87 -100 15.73 100" overflow="visible"> 
//                   <polyline className="blade-side-2" points={`0,0 -2,-2.09 -2.25,-175 2.25,-175 10,-12 0,0`}/>
//                   <polygon className="blade-side-1" points={`0,-175 -2.25,-175 -16,-40 0,0 		`}/>
//                 </symbol>
//               </defs>

//               <mask id="blade-center">
//                 <circle fill="#ffffff" cx="0" cy="0" r="10"/>
//               </mask>

//               <g ref={node => this.blades = node}>
//                 <g transform={`scale(${scale})`}>
//                 <use xlinkHref='#Blade' width='15.73' height='100' x='-7.87' y='-100' transform="rotate(-120)"overflow='visible' />
//                 <use xlinkHref='#Blade1' width='15.73' height='100' x='-7.87' y='-100' overflow='visible' />
//                 <use xlinkHref='#Blade' width='15.73' height='100' x='-7.87' y='-100' overflow='visible' />
//                 <use xlinkHref='#Blade' width='15.73' height='100' x='-7.87' y='-100' transform="rotate(120)" overflow='visible' />
//                 </g>
//               </g>

//               <g className="center" transform={`scale(${bladeWidthScale})`}>
//                 <circle className="hub-circle" cx="0" cy="0" r="10"/>
//                 <polygon className="hub-shine" points="0,0 -10,5 0,12.5 " transform="rotate(180)"mask="url(#blade-center)" />
//                 <circle className="hub-center" cx="0" cy="0" r="5"/>
//               </g>
//             </svg>
//         );
//     }
// }

// export default ReactAnimationFrame(TurbineBlades);    
import React, { useState, useEffect, useRef } from "react";
import "./TurbineBlades.css";

const TurbineBlades = ({ windVelocity, bladeLength, x, y, width }) => {
    const [angle, setAngle] = useState(Math.random() * 120);
    const bladesRef = useRef(null);

    useEffect(() => {
        const animate = () => {
            const velocity = windVelocity > 3 ? (windVelocity - 3) / 12 : 0;
            setAngle((prevAngle) => (prevAngle + velocity * 6) % 360);
            if (bladesRef.current) {
                bladesRef.current.style.transform = `rotate(${angle}deg)`;
            }
        };

        const animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [windVelocity, angle]);

    const bladeLengthScaled = (350 * bladeLength) / 200;
    const bladeWidthScale = 0.6 * (bladeLengthScaled / 175) + 0.4;
    const scale = bladeLengthScaled / 175;

    return (
        <svg className="turbine-blades" viewBox="-100 -100 200 200" preserveAspectRatio="xMaxYMid meet" x={x} y={y} width={width}>
            <defs>
            <symbol  id="Blade" viewBox="-7.87 -100 15.73 100" overflow="visible"> 
//                   <polyline className="blade-side-2" points={`0,0 -2,-2.09 -2.25,-175 2.25,-175 10,-12 0,0`}/>
//                   <polygon className="blade-side-1" points={`0,-175 -2.25,-175 -16,-40 0,0 		`}/>
//                 </symbol>
            </defs>

            <mask id="blade-center">
                <circle fill="#ffffff" cx="0" cy="0" r="10" />
            </mask>

            <g ref={bladesRef}>
                <g transform={`scale(${scale})`}>
                    <use xlinkHref="#Blade" width="15.73" height="100" x="-7.87" y="-100" transform="rotate(-120)" />
                    <use xlinkHref="#Blade" width="15.73" height="100" x="-7.87" y="-100" />
                    <use xlinkHref="#Blade" width="15.73" height="100" x="-7.87" y="-100" transform="rotate(120)" />
                </g>
            </g>

            <g className="center" transform={`scale(${bladeWidthScale})`}>
                <circle className="hub-circle" cx="0" cy="0" r="10" />
                <polygon className="hub-shine" points="0,0 -10,5 0,12.5" transform="rotate(180)" mask="url(#blade-center)" />
                <circle className="hub-center" cx="0" cy="0" r="5" />
            </g>
        </svg>
    );
};

export default TurbineBlades;
