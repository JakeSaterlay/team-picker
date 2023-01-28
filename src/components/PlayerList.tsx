import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { IPlayer } from "../types/interfaces/IPlayer";
import Player from "./Player";
import { StrictModeDroppable } from "./StrictModeDroppable";

const players: IPlayer[] = [
	{
		id: "harrykane",
		name: "Harry Kane",
		img: "images/kane.png",
	},
	{
		id: "judebellingham",
		name: "Jude Bellingham",
		img: "images/bellingham.png",
	},
	{
		id: "harrymaguire",
		name: "Harry Maguire",
		img: "images/maguire.png",
	},
	{
		id: "jordanpickford",
		name: "Jordan Pickford",
		img: "images/pickford.png",
	},
];

function PlayerList() {
	return (
		<div className="bg-white">
			<DragDropContext onDragEnd={() => {}}>
				<StrictModeDroppable droppableId="players" direction="horizontal">
					{(provided) => (
						<ul
							className="flex flex-row"
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{players.map((player, index) => (
								<Draggable
									draggableId={player.id}
									index={index}
									key={player.id}
								>
									{(provided) => (
										<li
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											ref={provided.innerRef}
										>
											<Player player={player} />
										</li>
									)}
								</Draggable>
							))}
						</ul>
					)}
				</StrictModeDroppable>
			</DragDropContext>
		</div>
	);
}

export default PlayerList;
