import React from "react";

import { useAnotherContext } from "../context/AnotherContext";

const LaserShot = () => {
	const anotherContext = useAnotherContext();

	console.log("Render LaserShot Comp");
	console.log(anotherContext);
	return (
		<>
			<p>Laser Shot</p>
		</>
	);
};

export default React.memo(LaserShot);
