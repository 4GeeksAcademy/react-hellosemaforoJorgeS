import React, {useState} from "react";



//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("red");
	return (
		<div className="traffic-light">
		<div className={`red ${color === "red" ? "selected" : ""}`} onClick={() => setColor("red")}></div>
		<div className={`yellow ${color === "yellow" ? "selected" : ""}`} onClick={() => setColor("yellow")}></div>
		<div className={`green ${color === "green" ? "selected" : ""}`} onClick={() => setColor("green")}></div>
		</div>
	);
};

export default TrafficLight;