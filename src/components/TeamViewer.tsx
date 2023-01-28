import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import PlayerList from "./PlayerList";

const TeamViewer = () => {
	const [formation, setFormation] = useState("4-4-2");

	const handleFormationChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setFormation(event.target.value);
	};
	return (
		<React.Fragment>
			<select
				id="small"
				className="block w-64 p-2 mb-6 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
				onChange={handleFormationChange}
			>
				<option selected>Choose a formation</option>
				<option value="4-4-2">4-4-2</option>
				<option value="3-4-3">3-4-3</option>
				<option value="4-3-3">4-3-3</option>
				<option value="5-3-2">5-3-2</option>
			</select>

			<div className="flex flex-col justify-center">
				<div className="flex flex-row justify-center">
					<div className="h-24 w-24 bg-white m-10"></div>
				</div>
				{formation.split("-").map((row, index) => (
					<div className="flex flex-row justify-center" key={index}>
						{Array(parseInt(row))
							.fill(0)
							.map((_, index) => (
								<div className="h-24 w-24 bg-white m-10" key={index}></div>
							))}
					</div>
				))}
				<PlayerList />
			</div>
		</React.Fragment>
	);
};

export default TeamViewer;
