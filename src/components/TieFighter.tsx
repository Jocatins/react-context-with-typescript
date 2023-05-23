import React from "react";
import LaserShot from "./LaserShot";
import { useAwesomeContext } from "../context/AwesomeContext";
import { AnotherContextProvider } from "../context/AnotherContext";

const TieFighter = () => {
	const { awesomeState, setAwesomeState } = useAwesomeContext();

	console.log("Render TieFighter Comp");
	console.log(awesomeState);

	return (
		<>
			<AnotherContextProvider>
				<div>TieFighter</div>
				<LaserShot />
				<button onClick={() => setAwesomeState(Math.random)}>
					Click Me
				</button>
			</AnotherContextProvider>
		</>
	);
};

export default TieFighter;
