import { PlayerProps } from "../types/props/PlayerProps";

function Player(props: PlayerProps) {
	return (
		<div>
			<img className="h-28" src={props.player.img} />
		</div>
	);
}

export default Player;
